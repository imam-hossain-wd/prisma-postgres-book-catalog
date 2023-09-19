import { Router } from "express";
import { orderController } from "./order.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validationRequest";
import { OrderValidation } from "./orderValidation";




const router = Router();

router.post('/create-order',
auth(ENUM_USER_ROLE.CUSTOMER),
validateRequest(OrderValidation.createOrderZodSchema),
orderController.createOrder)



router.get('/',
auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
 orderController.getAllOrders)

//  router.get('/my',
//  auth(ENUM_USER_ROLE.CUSTOMER),
//  orderController.getMyOrder)

router.get('/:id',
auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
orderController.getSingleOrder)

router.patch('/:id',
validateRequest(OrderValidation.updateOrderZodSchema),
auth(ENUM_USER_ROLE.ADMIN),
orderController.updateOrder);

router.delete('/:id',
auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
orderController.deleteOrder)

export const orderRoutes = router;