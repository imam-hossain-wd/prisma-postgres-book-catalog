import { Router } from 'express';
import { bookController } from './book.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validationRequest';
import { BookValidation } from './book.validation';

const router = Router();

router.post(
  '/create-book',
  validateRequest(BookValidation.createBookZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.createBook
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  bookController.getAllBooks
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  bookController.getSingleBook
);
router.get(
  '/:id/category',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  bookController.getCategoryIdBook
);

router.patch(
  '/:id',
  validateRequest(BookValidation.updateBookZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  bookController.updateBook
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), bookController.deleteBook);

export const bookRoutes = router;
