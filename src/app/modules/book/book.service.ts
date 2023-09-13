import {Book }from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IPaginationOptions } from './book.interface';

const createBook = async(data:Book): Promise<Book> => {
    const result = await prisma.book.create({
        data,
        include:{
            category:true
        }
    })
    return result;
}

const getAllBooks = async(options:IPaginationOptions): Promise<Book[]> => {
    const{page, size, sortBy, sortOrder,minPrice, maxPrice, searchTerm}=options;
    const bookSize = parseInt(size);
    const bookPage = parseInt(page);
    const skip = bookSize * bookPage - bookSize || 0;
    const take = bookSize || 10;

    const result = await prisma.book.findMany({
        skip,
        take,
        orderBy: {
            [sortBy]: sortOrder,
          },
          where: {
            OR: [
                {
                    title: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                },
                {
                    author: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                },
                {
                    genre: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                }
               
            ]
        }
    });
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
