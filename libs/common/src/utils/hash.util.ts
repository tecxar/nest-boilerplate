import { createHash } from 'node:crypto';

export function md5(content: any) {
	return createHash('md5').update(content).digest('hex');
}
