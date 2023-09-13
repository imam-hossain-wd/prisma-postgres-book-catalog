import {Book }from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBook = async(data:Book): Promise<Book> => {
    const result = await prisma.book.create({
        data,
        include:{
            category:true
        }
    })
    return result;
}

const getAllBooks = async(): Promise<Book[]> => {
    const result = await prisma.book.findMany();
    return result;
}


const getSingleBook = async(id:string): Promise<Book | null> => {
    const result = await prisma.book.findUnique({
        where: {
            id
        }
    })
    return result;
}


const updateBook = async(id:string,data: Partial<Book>): Promise<Book | null> => {
    const result = await prisma.book.update({
        where: {
            id
        },
        data
    });
    return result
}
const deleteBook = async( id:string): Promise<Book | null> => {
    const result = await prisma.book.delete({
        where: {
            id
        }
    });
    return result
}




export const bookService = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
}
