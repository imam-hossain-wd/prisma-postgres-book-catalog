import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { bookService } from './book.service';
import pick from '../../../shared/pick';
import { BookFilterableFields } from './book.constrants';


const createBook: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await bookService.createBook(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book create successfully',
    data: result,
  });
});

const getAllBooks: RequestHandler = catchAsync(async (req, res) => {
  const filters = pick(req.query,BookFilterableFields);
  const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
  const result = await bookService.getAllBooks(options, filters);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrived successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBook: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookService.getSingleBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single Book retrived successfully',
    data: result,
  });
});
const updateBook: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const result = await bookService.updateBook(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});
const deleteBook: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookService.deleteBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book delete successfully',
    data: result,
  });
});

export const bookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,

};
