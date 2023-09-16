import { Router } from "express";
import { categoryController } from "./category.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";


const router = Router();

router.post('/create-category',
// auth(ENUM_USER_ROLE.ADMIN),
categoryController.createCategory)

router.get('/',
auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.CUSTOMER),
categoryController.getAllCategorys)

router.get('/:id',
auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.CUSTOMER),
categoryController.getSingleCategory)

router.patch('/:id',
auth(ENUM_USER_ROLE.ADMIN),
categoryController.updateCategory)

router.delete('/:id',
auth(ENUM_USER_ROLE.ADMIN),
categoryController.deleteCategory)

export const categoryRoutes = router;