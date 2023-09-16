import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import config from '../../config';
import { userAuthService } from './userAuth.service';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  console.log(data);
  console.log('clicked');
  const result = await userAuthService.createUser(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user create successfully',
    data: result,
  });
});
const loginUser: RequestHandler = catchAsync(async (req, res) => {
  console.log("click");
  const data = req.body;
  const result = await userAuthService.loginUser(data);
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
const hello: RequestHandler = catchAsync(async (req, res) => {
    const data = {
      message:"yes boos"
    }
    res.send(data)

});



export const userAuthController = {
  createUser,
  loginUser,
  hello
};
