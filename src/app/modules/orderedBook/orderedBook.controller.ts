import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { orderedBookService } from './orderedBook.service';





const createOrderedBook: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await orderedBookService.createOrderedBook(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OrderedBook create successfully',
    data: result,
  });
});
const getAllOrderedBooks: RequestHandler = catchAsync(async (req, res) => {
  const result = await orderedBookService.getAllOrderedBooks();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OrderedBook retrived successfully',
    data: result,
  });
});
const getSingleOrderedBook: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await orderedBookService.getSingleOrderedBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single OrderedBook retrived successfully',
    data: result,
  });
});
const updateOrderedBook: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const result = await orderedBookService.updateOrderedBook(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OrderedBook updated successfully',
    data: result,
  });
});
const deleteOrderedBook: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await orderedBookService.deleteOrderedBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OrderedBook delete successfully',
    data: result,
  });
});

export const orderedBookController = {
  createOrderedBook,
  getAllOrderedBooks,
  getSingleOrderedBook,
  updateOrderedBook,
  deleteOrderedBook,
};
