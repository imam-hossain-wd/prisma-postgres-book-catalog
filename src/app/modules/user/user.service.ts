import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../config';
import {  Secret } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';



const getAllUsers = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getProfile = async (token: any):Promise<User | null> => {
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }

  const user = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const { id } = user;

  const result = await prisma.user.findFirst({
    where: {
      id,
    },
  });
  return result;
};

const getSingleUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateUser = async (
  id: string,
  data: Partial<User>
): Promise<User | null> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const userService = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  getProfile,
};
