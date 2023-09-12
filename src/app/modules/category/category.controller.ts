import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { categoryService } from './category.service';

const createCategory: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await categoryService.createCategory(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category create successfully',
    data: result,
  });
});
const getAllCategorys: RequestHandler = catchAsync(async (req, res) => {
  const result = await categoryService.getAllCategorys();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrived successfully',
    data: result,
  });
});
const getSingleCategory: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryService.getSingleCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single Category retrived successfully',
    data: result,
  });
});
const updateCategory: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const result = await categoryService.updateCategory(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
});
const deleteCategory: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryService.deleteCategory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category delete successfully',
    data: result,
  });
});

export const categoryController = {
  createCategory,
  getAllCategorys,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
