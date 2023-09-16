import { Router } from 'express';
import { reviewAndRatingController } from './reviewAndRating.controller';
import validateRequest from '../../middlewares/validationRequest';
import { ReviewsAndRatingsValidation } from './reviewAndRating.validation';

const router = Router();

router.post(
  '/create-reviewAndRating',
  validateRequest(ReviewsAndRatingsValidation.createReviewsAndRatingsZodSchema),
  reviewAndRatingController.createReviewAndRating
);

router.get('/', reviewAndRatingController.getAllReviewAndRatings);

router.get('/:id', reviewAndRatingController.getSingleReviewAndRating);

router.patch(
  '/:id',
  validateRequest(ReviewsAndRatingsValidation.updateReviewsAndRatingsZodSchema),
  reviewAndRatingController.updateReviewAndRating
);

router.delete('/:id', reviewAndRatingController.deleteReviewAndRating);

export const reviewAndRatingRoutes = router;
