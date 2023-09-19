import { Book, Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { paginationHelpers } from '../../../helpers/paginationHelpers';
import { BookSearchAbleFields } from './book.constrants';

const createBook = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllBooks = async (options: any, filters: any) => {
  const { page, size, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, category, ...filterData } = filters;
  const { sortBy, sortOrder } = options;

  const minPrice = parseFloat(filterData?.minPrice);
  const maxPrice = parseFloat(filterData?.maxPrice);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: BookSearchAbleFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (!isNaN(minPrice) && !isNaN(maxPrice)) {
    andConditions.push({
      price: {
        gte: minPrice,
        lte: maxPrice,
      },
    });
  } else if (!isNaN(minPrice)) {
    andConditions.push({
      price: {
        gte: minPrice,
      },
    });
  } else if (!isNaN(maxPrice)) {
    andConditions.push({
      price: {
        lte: maxPrice,
      },
    });
  }

  if (category) {
    andConditions.push({
      categoryId: {
        equals: category,
      },
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: size,
    orderBy: { [sortBy]: sortOrder },
  });

  const total = await prisma.book.count({
    where: whereConditions,
  });

  const totalPage = Math.ceil(total / size);

  return {
    data: result,
    meta: { page, size, total, totalPage },
  };
};

const getCategoryIdBook = async (
  categoryId: string
) => {

  const page = 1;
  const size = 10;
  const skip = (page - 1) * size;

  const result = await prisma.book.findMany({
    where: {
      categoryId: categoryId,
    },
    skip,
    take:size
  });
  const total = await prisma.book.count({
    where: {
      categoryId: categoryId,
    },
  });

  const totalPage = Math.ceil(total / size);

  return {
    data: result,
    meta: { page, size, total, totalPage },
  };
};

const getSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateBook = async (
  id: string,
  data: Partial<Book>
): Promise<Book | null> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
const deleteBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

export const bookService = {
  createBook,
  getAllBooks,
  getCategoryIdBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
