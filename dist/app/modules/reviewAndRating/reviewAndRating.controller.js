"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewAndRatingController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const reviewAndRating_service_1 = require("./reviewAndRating.service");
const createReviewAndRating = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield reviewAndRating_service_1.reviewAndRatingService.createReviewAndRating(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'ReviewAndRating create successfully',
        data: result,
    });
}));
const getAllReviewAndRatings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield reviewAndRating_service_1.reviewAndRatingService.getAllReviewAndRatings();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'ReviewAndRating retrived successfully',
        data: result,
    });
}));
const getSingleReviewAndRating = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield reviewAndRating_service_1.reviewAndRatingService.getSingleReviewAndRating(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'single ReviewAndRating retrived successfully',
        data: result,
    });
}));
const updateReviewAndRating = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { id } = req.params;
    const result = yield reviewAndRating_service_1.reviewAndRatingService.updateReviewAndRating(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'ReviewAndRating updated successfully',
        data: result,
    });
}));
const deleteReviewAndRating = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield reviewAndRating_service_1.reviewAndRatingService.deleteReviewAndRating(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'ReviewAndRating delete successfully',
        data: result,
    });
}));
exports.reviewAndRatingController = {
    createReviewAndRating,
    getAllReviewAndRatings,
    getSingleReviewAndRating,
    updateReviewAndRating,
    deleteReviewAndRating,
};
