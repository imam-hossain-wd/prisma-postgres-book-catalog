import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validationRequest";
import { UserValidation } from "./user.validation";

const router = Router();

router.post('/create-user',
validateRequest(UserValidation.createUserZodSchema)
,userController.createUser)

router.get('/', userController.getAllUsers)

router.get('/:id', userController.getSingleUser)

router.patch('/:id',
validateRequest(UserValidation.updateUserZodSchema),
userController.updateUser)

router.delete('/:id', userController.deleteUser)

export const userRoutes = router;