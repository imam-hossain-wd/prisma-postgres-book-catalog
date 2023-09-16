
import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../config';
import { Secret } from 'jsonwebtoken';



const createOrder = async(data:any):Promise<Order | null> => {

    const result = await prisma.order.create({
        data
    })
    return result;
}

const myOrder = async(token:any): Promise<Order[] | null> => {
    console.log(token, 'order token');
    if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }
    
      const user = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
      const { id } = user;
      console.log(user);
      const result = await prisma.order.findMany({
        where: {
            userId:id,
        },
      });
      console.log(result);
      return result;
}

const getAllOrders = async(): Promise<Order[]> => {
    const result = await prisma.order.findMany();
    return result;
}


const getSingleOrder = async(id:string): Promise<Order | null> => {
    const result = await prisma.order.findUnique({
        where: {
            id
        }
    })
    return result;
}


const updateOrder = async(id:string,data: any): Promise<Order | null> => {
    const result = await prisma.order.update({
        where: {
            id
        },
        data
    });
    return result
}
const deleteOrder = async( id:string): Promise<Order | null> => {
    const result = await prisma.order.delete({
        where: {
            id
        }
    });
    return result
}




export const orderService = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
    myOrder
}
