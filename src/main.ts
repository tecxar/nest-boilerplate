import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import compression from 'compression';
import { HttpExceptionFilter } from './filters/bad-request.filter';
import {
	ClassSerializerInterceptor,
	HttpStatus,
	RequestMethod,
	UnprocessableEntityException,
	ValidationPipe,
	VersioningType,
} from '@nestjs/common';
import { ApiConfigService } from './config/api-config.service';
import { setupSwagger } from './setup-swagger';
import { ConfigService } from '@nestjs/config';

/**
 * @returns {NestExpressApplication}  Retuns an instance of NestJS Application
 */
async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(), { cors: true });

	app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

	app.disable('x-powered-by');

	app.use(helmet());

	app.useBodyParser('json', { limit: '50mb' });

	app.setGlobalPrefix('/api', {
		exclude: [{ path: 'metrics', method: RequestMethod.GET }],
	}); // use api as global prefix if you don't have subdomain

	app.use(compression());

	app.enableVersioning({
		type: VersioningType.URI,
	});

	const reflector = app.get(Reflector);

	app.useGlobalFilters(new HttpExceptionFilter(reflector));

	app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
			transform: true,
			dismissDefaultMessages: true,
			forbidUnknownValues: true,
			exceptionFactory: errors => new UnprocessableEntityException(errors),
		}),
	);

	const congig = app.get(ConfigService);
	const configService = new ApiConfigService(congig);

	// only start nats if it is enabled
	if (configService.microserviceEnabled) {
		await app.startAllMicroservices();
	}

	if (configService.documentationEnabled) {
		setupSwagger(app);
	}

	// Starts listening for shutdown hooks
	if (!configService.isDevelopment) {
		app.enableShutdownHooks();
	}

	const port = configService.appConfig.port;

	app.listen(port).then(async () => {
		console.info(`server running on ${await app.getUrl()}`);
	});

	return app;
}
bootstrap();
