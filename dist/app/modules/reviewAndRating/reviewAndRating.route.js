"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewAndRatingRoutes = void 0;
const express_1 = require("express");
const reviewAndRating_controller_1 = require("./reviewAndRating.controller");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const reviewAndRating_validation_1 = require("./reviewAndRating.validation");
const router = (0, express_1.Router)();
router.post('/create-reviewAndRating', (0, validationRequest_1.default)(reviewAndRating_validation_1.ReviewsAndRatingsValidation.createReviewsAndRatingsZodSchema), reviewAndRating_controller_1.reviewAndRatingController.createReviewAndRating);
router.get('/', reviewAndRating_controller_1.reviewAndRatingController.getAllReviewAndRatings);
router.get('/:id', reviewAndRating_controller_1.reviewAndRatingController.getSingleReviewAndRating);
router.patch('/:id', (0, validationRequest_1.default)(reviewAndRating_validation_1.ReviewsAndRatingsValidation.updateReviewsAndRatingsZodSchema), reviewAndRating_controller_1.reviewAndRatingController.updateReviewAndRating);
router.delete('/:id', reviewAndRating_controller_1.reviewAndRatingController.deleteReviewAndRating);
exports.reviewAndRatingRoutes = router;
