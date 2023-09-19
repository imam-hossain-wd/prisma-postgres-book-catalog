import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../config';
import { Secret } from 'jsonwebtoken';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = async (data: any): Promise<Order | null> => {
  const result = await prisma.order.create({
    data,
  });
  return result;
};

const getSingleOrder = async (orderId: string, token: string) => {
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  const user = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);

  if (user.role === 'admin') {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    return order;
  }
  if (user.role === 'customer') {
    const userOrder = await prisma.order.findMany({
      where: {
        userId: user.id,
      },
    });

    const userOrderFound = userOrder.find(order => order.id === orderId);
    if (userOrderFound) {
      return userOrderFound;
    } else {
      return [];
    }
  }
  return [];
};

const getAllOrders = async (token: string) => {
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  const user = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const { id, role } = user;

  if (role === 'admin') {
    const order = await prisma.order.findMany();
    return order;
  }

  if (role === 'customer') {
    const userOrder = await prisma.order.findMany({
      where: {
        userId: id,
      },
    });
    return userOrder;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateOrder = async (id: string, data: any): Promise<Order | null> => {
  const result = await prisma.order.update({
    where: {
      id,
    },
    data,
  });
  return result;
};


const deleteOrder = async (id: string, token:string) => {
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  const user = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const { id:userId, role } = user;

  if (role === 'admin') {
    const order = await prisma.order.delete({
      where: {
        id
      }
    });
    return order;
  }

  if (role === 'customer') {
    const userOrder = await prisma.order.findMany({
      where: {
        userId: userId,
      },
    });
    
    const foundUserOrder = userOrder.filter(order => order.id === id);
    if(!foundUserOrder){
      throw new ApiError(httpStatus.NOT_FOUND, "You have no order")
    }
    if(foundUserOrder){
      const order = await prisma.order.delete({
        where: {
          id
        }
      });
      return order;
    }
  }
};

export const orderService = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
