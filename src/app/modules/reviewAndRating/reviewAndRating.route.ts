import { Router } from "express";
import { reviewAndRatingController } from "./reviewAndRating.controller";


const router = Router();

router.post('/create-reviewAndRating', reviewAndRatingController.createReviewAndRating)
router.get('/', reviewAndRatingController.getAllReviewAndRatings)
router.get('/:id', reviewAndRatingController.getSingleReviewAndRating)
router.patch('/:id', reviewAndRatingController.updateReviewAndRating)
router.delete('/:id', reviewAndRatingController.deleteReviewAndRating)

export const reviewAndRatingRoutes = router;