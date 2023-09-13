import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { orderService } from './order.service';




const createOrder: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await orderService.createOrder(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order create successfully',
    data: result,
  });
});
const getAllOrders: RequestHandler = catchAsync(async (req, res) => {
  const result = await orderService.getAllOrders();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrived successfully',
    data: result,
  });
});
const getSingleOrder: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await orderService.getSingleOrder(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single Order retrived successfully',
    data: result,
  });
});
const updateOrder: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const result = await orderService.updateOrder(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order updated successfully',
    data: result,
  });
});
const deleteOrder: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await orderService.deleteOrder(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order delete successfully',
    data: result,
  });
});

export const orderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
