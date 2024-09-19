import _ from 'lodash';

/**
 *
 * @param   {unknown} obj An Object to be validated
 * @returns {boolean} returns true if object is Null or Undefined
 */
export function isNull(obj?: unknown): boolean {
	return _.isNull(obj) || _.isUndefined(obj);
}

/**
 *
 * @param   {unknown} obj An Object to be validated
 * @returns {boolean} returns false if object is Null or Undefined
 */
export function isNotNull(obj?: any): boolean {
	return !_.isNull(obj) && !_.isUndefined(obj);
}
