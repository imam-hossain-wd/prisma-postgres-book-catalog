
import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';



const createOrder = async(data:any):Promise<Order | null> => {

    const result = await prisma.order.create({
        data
    })
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
    deleteOrder
}
