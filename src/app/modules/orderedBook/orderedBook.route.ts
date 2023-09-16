import { Router } from "express";
import { orderedBookController } from "./orderedBook.controller";
import validateRequest from "../../middlewares/validationRequest";
import { OrderedBookValidation } from "./orderedBook.validation";


const router = Router();

router.post('/create-ordered-book',
validateRequest(OrderedBookValidation.createOrderedBookZodSchema),
orderedBookController.createOrderedBook)
router.get('/', orderedBookController.getAllOrderedBooks)
router.get('/:id', orderedBookController.getSingleOrderedBook)
router.patch('/:id',
validateRequest(OrderedBookValidation.updateOrderedBookZodSchema),
orderedBookController.updateOrderedBook)
router.delete('/:id', orderedBookController.deleteOrderedBook)

export const orderedBookRoutes = router;