import type { Response } from 'express';
/**
 * Wrapper for successful response
 * @param status
 * @param response
 * @param endPointName
 * @param data
 * @param message
 */
export const ReturnSuccess = (
  status: number,
  response: Response,
  endPointName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any,
  message: string,
): void => {
  const returnFormat = {
    results,
    status,
    endPointName,
    message,
  };

  response.status(status);
  response.json(returnFormat);
};

/**
 * Wrapper for Error response
 * @param status
 * @param response
 * @param data
 */
export const ReturnError = (
  status: number,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  message: string,
): void => {
  const returnFormat = {
    message,
    error: data,
    status,
  };

  response.status(status);
  response.json(returnFormat);
};
