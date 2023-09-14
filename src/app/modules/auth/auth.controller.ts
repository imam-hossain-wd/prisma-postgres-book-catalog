import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { authService } from './auth.service';
import config from '../../config';

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
const loginUser: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await authService.loginUser(data);
  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user login successfully',
    data: {
      accessToken: others,
    },
  });
});

export const authController = {
  createUser,
  loginUser,
};
