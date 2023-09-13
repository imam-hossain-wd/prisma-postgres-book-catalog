import { Router } from "express";
import { orderedBookController } from "./orderedBook.controller";




const router = Router();

router.post('/create-ordered-book', orderedBookController.createOrderedBook)
router.get('/', orderedBookController.getAllOrderedBooks)
router.get('/:id', orderedBookController.getSingleOrderedBook)
router.patch('/:id', orderedBookController.updateOrderedBook)
router.delete('/:id', orderedBookController.deleteOrderedBook)

export const orderedBookRoutes = router;