import {Book, Prisma }from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IPaginationOptions } from './book.interface';
import { BookSearchAbleFields } from './book.constrants';

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
    const{page, size, sortBy, sortOrder,searchTerm, ...filterData}=options;
    // const {minPrice, maxPrice,category}= filterData;
 
    // const mnprice= parseFloat(minPrice)
    // const mxprice= parseFloat(maxPrice)

    // const filteringData = {
    //     price:mnprice,
    //     category
    // }


    const bookSize = parseInt(size);
    const bookPage = parseInt(page);
    const skip = bookSize * bookPage - bookSize || 0;
    const take = bookSize || 10;

 

    const andConditons = [];

    if (searchTerm) {
        andConditons.push({
            OR: BookSearchAbleFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        })
    }

    // if (Object.keys(filteringData).length > 0) {
    //     andConditons.push({
    //         AND: Object.keys(filteringData).map((key) => ({
    //             [key]: {
    //                 equals: (filteringData as any)[key]
    //             }
    //         }))
    //     })
    // }

    const whereConditons: Prisma.BookWhereInput = andConditons.length > 0 ? { AND: andConditons } : {};


    const result = await prisma.book.findMany({
        where: whereConditons,
        skip,
        take,
        orderBy: { [sortBy]: sortOrder }
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
