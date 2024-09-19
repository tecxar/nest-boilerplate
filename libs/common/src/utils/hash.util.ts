import { BinaryLike, createHash } from 'node:crypto';

/**
 *
 * @param {BinaryLike} content : Content to be hashed
 * @returns {string} : Hashed string of the inout content
 */
export function md5(content: BinaryLike): string {
	return createHash('md5').update(content).digest('hex');
}
