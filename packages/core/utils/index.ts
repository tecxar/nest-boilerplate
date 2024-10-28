export const responser = (
  statusCode: number,
  message: string,
  data?: any,
  error?: string,
) => {
  const returnObj: any = {
    statusCode: statusCode,
    message: message,
  };
  if (error) {
    returnObj['error'] = error;
  }
  if (data) {
    returnObj['data'] = data;
  }
  return returnObj;
};

export const isEmpty = (value: string | number | object): boolean => {
  return (
    value === null ||
    (typeof value === 'string' && value.trim() === '') ||
    typeof value === 'undefined' ||
    (typeof value === 'object' &&
      value !== null &&
      Object.keys(value).length === 0)
  );
};
