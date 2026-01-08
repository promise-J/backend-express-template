export function apiResponse(
    res: any,
    data: any,
    message = 'Success',
    statusCode = 200
  ) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }
// Compare this snippet from src/middlewares/logger.middleware.ts:  