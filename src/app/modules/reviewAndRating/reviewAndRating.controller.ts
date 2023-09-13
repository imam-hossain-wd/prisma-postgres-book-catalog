import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { reviewAndRatingService } from './reviewAndRating.service';



const createReviewAndRating: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await reviewAndRatingService.createReviewAndRating(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReviewAndRating create successfully',
    data: result,
  });
});
const getAllReviewAndRatings: RequestHandler = catchAsync(async (req, res) => {
  const result = await reviewAndRatingService.getAllReviewAndRatings();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReviewAndRating retrived successfully',
    data: result,
  });
});
const getSingleReviewAndRating: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewAndRatingService.getSingleReviewAndRating(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single ReviewAndRating retrived successfully',
    data: result,
  });
});
const updateReviewAndRating: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const result = await reviewAndRatingService.updateReviewAndRating(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReviewAndRating updated successfully',
    data: result,
  });
});
const deleteReviewAndRating: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewAndRatingService.deleteReviewAndRating(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ReviewAndRating delete successfully',
    data: result,
  });
});

export const reviewAndRatingController = {
  createReviewAndRating,
  getAllReviewAndRatings,
  getSingleReviewAndRating,
  updateReviewAndRating,
  deleteReviewAndRating,
};
