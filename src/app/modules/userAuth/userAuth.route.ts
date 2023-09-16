import { Router } from "express";
import { userAuthController } from "./userAuth.controller";



const router = Router();

router.post('/singup', userAuthController.createUser)

export const userAuthRoutes = router;