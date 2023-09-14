import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { authService } from './auth.service';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  
  const data = req.body;
  const result = await authService.createUser(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user create successfully',
    data: result,
  });
});


export const authController = {
  createUser,

};
