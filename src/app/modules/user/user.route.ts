import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validationRequest";
import { UserValidation } from "./user.validation";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = Router();


router.get('/',
auth(ENUM_USER_ROLE.ADMIN),
userController.getAllUsers);

router.get('/profile', userController.getProfile)

router.get('/:id',
auth(ENUM_USER_ROLE.ADMIN),
userController.getSingleUser)

router.patch('/:id',
auth(ENUM_USER_ROLE.ADMIN),
validateRequest(UserValidation.updateUserZodSchema),
userController.updateUser)

router.delete('/:id',
auth(ENUM_USER_ROLE.ADMIN),
userController.deleteUser)

export const userRoutes = router;