import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewares/validationRequest";
import { AuthValidation } from "./auth.validation";

const router = Router();

router.post('/signup',
validateRequest(AuthValidation.createUserZodSchema),
authController.createUser)

router.post('/singin',
validateRequest(AuthValidation.loginUserZodSchema),
authController.loginUser)

export const authRoutes = router;