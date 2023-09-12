import { Router } from "express";
import { bookController } from "./book.controller";



const router = Router();

router.post('/create-book', bookController.createBook)
router.get('/', bookController.getAllBooks)
router.get('/:id', bookController.getSingleBook)
router.patch('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

export const bookRoutes = router;