import { z } from 'zod';

const createReviewsAndRatingsZodSchema = z.object({
  body: z.object({
    review: z.string({
      required_error: 'review is required',
    }),
    rating: z.number({
      required_error: 'rating is required',
    }),
    userId: z.number({
      required_error: 'userId is required',
    }),
    bookId: z.number({
      required_error: 'bookId is required',
    }),
  }),
});

const updateReviewsAndRatingsZodSchema = z.object({
  body: z.object({
    review: z.string().optional(),
    rating: z.number().optional(),
    userId: z.number().optional(),
    bookId: z.number().optional()
  }),
});

export const ReviewsAndRatingsValidation = {
    createReviewsAndRatingsZodSchema,
    updateReviewsAndRatingsZodSchema,
};
