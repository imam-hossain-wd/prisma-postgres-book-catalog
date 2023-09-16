import { Router } from "express";
import { orderController } from "./order.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";




const router = Router();

router.post('/create-order', orderController.createOrder)
router.get('/my-orders', orderController.getMyOrder)

router.get('/',
auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
 orderController.getAllOrders)

router.get('/:id',
auth(ENUM_USER_ROLE.ADMIN),
orderController.getSingleOrder)

router.patch('/:id',
auth(ENUM_USER_ROLE.ADMIN),
orderController.updateOrder);

router.delete('/:id',
auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
orderController.deleteOrder)

export const orderRoutes = router;