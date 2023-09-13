
import { OrderedBook } from '@prisma/client';
import prisma from '../../../shared/prisma';



const createOrderedBook = async(data:OrderedBook):Promise<OrderedBook | null> => {

    const result = await prisma.orderedBook.create({
        data
    })
    return result;
}

const getAllOrderedBooks = async(): Promise<OrderedBook[]> => {
    const result = await prisma.orderedBook.findMany();
    return result;
}


const getSingleOrderedBook = async(id:string): Promise<OrderedBook | null> => {
    const result = await prisma.orderedBook.findUnique({
        where: {
            id
        }
    })
    return result;
}


const updateOrderedBook = async(id:string,data: Partial<OrderedBook>): Promise<OrderedBook | null> => {
    const result = await prisma.orderedBook.update({
        where: {
            id
        },
        data
    });
    return result
}
const deleteOrderedBook = async( id:string): Promise<OrderedBook | null> => {
    const result = await prisma.orderedBook.delete({
        where: {
            id
        }
    });
    return result
}




export const orderedBookService = {
    createOrderedBook,
    getAllOrderedBooks,
    getSingleOrderedBook,
    updateOrderedBook,
    deleteOrderedBook
}
