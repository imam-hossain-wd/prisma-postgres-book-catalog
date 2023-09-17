"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsAndRatingsValidation = void 0;
const zod_1 = require("zod");
const createReviewsAndRatingsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string({
            required_error: 'review is required',
        }),
        rating: zod_1.z.number({
            required_error: 'rating is required',
        }),
        userId: zod_1.z.number({
            required_error: 'userId is required',
        }),
        bookId: zod_1.z.number({
            required_error: 'bookId is required',
        }),
    }),
});
const updateReviewsAndRatingsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string().optional(),
        rating: zod_1.z.number().optional(),
        userId: zod_1.z.number().optional(),
        bookId: zod_1.z.number().optional()
    }),
});
exports.ReviewsAndRatingsValidation = {
    createReviewsAndRatingsZodSchema,
    updateReviewsAndRatingsZodSchema,
};
