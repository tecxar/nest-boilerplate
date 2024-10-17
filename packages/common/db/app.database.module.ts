import { IConfig } from '@cleardu/interfaces';
import {
	type DynamicModule,
	Module,
  type Provider,
} from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { ModelCtor } from 'sequelize-typescript';
import { getClientToken } from './db.utils';

interface DatabaseRgisterOptions{
	isGlobal?: boolean;
	key?: string;
  models: string[] | ModelCtor[];
  config: IConfig;
}

interface DatabasRegisterAsyncOptions extends DatabaseRgisterOptions{
  useFactory?: (...args: any[]) => Promise<DatabaseRgisterOptions> | DatabaseRgisterOptions;
	inject?: any[];
	imports?: any[];
}



@Module({})
export class DatabaseModule {
 static forRoot(
		options: DatabaseRgisterOptions,
	): DynamicModule {
    const { key = "", isGlobal = false, models, config } = options;
    const providerToken = getClientToken(key);

    const ClientProvider: Provider = {
			provide: providerToken,
		};

    return {
      module: DatabaseModule,
      providers: [ClientProvider],
      imports: [
        SequelizeModule.forRoot({
            ...config.connection,
            synchronize: true,
            autoLoadModels: true,
            models,
            replication: config.replication
          
        })  ,
      ],
      exports: [DatabaseModule, SequelizeModule],
      global: isGlobal
    };
  }

  static forRootAsync(
		options: DatabasRegisterAsyncOptions,
	): Promise<DynamicModule>  {
    const { key = "", isGlobal = false, models } = options;

    return new Promise(async (resolve)=> {

      		const asyncOptions = await this.createAsyncOptionsProvider(options);
  
          resolve( {
            module: DatabaseModule,
            providers: [asyncOptions, ...options.imports],
            imports: [
              SequelizeModule.forRoot({
                  ...asyncOptions.connection,
                  synchronize: true,
                  autoLoadModels: true,
                  models,
                  replication: asyncOptions.replication
                
              })
            ],
            exports: [DatabaseModule, SequelizeModule],
            global: isGlobal
          })

      
    })
  }

  private static async createAsyncOptionsProvider<T>(options: DatabasRegisterAsyncOptions): Provider {
    const { key = "" } = options;
    const providerToken = getClientToken(key);
    const ClientProvider: Provider = {
			provide: providerToken,
		};

		return {
			provide: ClientProvider,
			useFactory: async (...args: any[]) => {
				const config = await options.useFactory(...args);
				return config;
			},
			inject: options.inject || [],
			imports: options.imports || [],
		};
	}
}
