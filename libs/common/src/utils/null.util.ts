import _ from 'lodash';

export function isNull(obj?: any): boolean {
  return _.isNull(obj) || _.isUndefined(obj);
}

export function isNotNull(obj?: any): boolean {
  return !_.isNull(obj) && !_.isUndefined(obj);
}
