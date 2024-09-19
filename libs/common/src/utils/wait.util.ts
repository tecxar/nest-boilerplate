/**
 *
 * @param   {number} seconds Number of seconds to wait
 * @returns {Promise} Returns a Promise that resolved after seconds
 */
export function wait(seconds: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
