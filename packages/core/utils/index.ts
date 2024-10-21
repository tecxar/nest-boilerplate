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
