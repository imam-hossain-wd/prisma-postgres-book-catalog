import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../config';
import { Secret } from 'jsonwebtoken';

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};
const loginUser = async (data: User) => {
  const { email, password } = data;

  const isUserExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (isUserExist && isUserExist?.password !== password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const id = isUserExist?.id;
  const role = isUserExist?.role;

  const accessToken = jwtHelpers.createToken(
    { id, role },
    config.jwt_secret as Secret,
    config.jwt_expire_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { id, role },
    config.jwt_refresh_secret as Secret,
    config.jwt_refresh_expire_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const userAuthService = {
  createUser,
  loginUser,
};
