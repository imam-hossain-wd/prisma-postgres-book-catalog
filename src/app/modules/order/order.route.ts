import { Router } from "express";
import { orderController } from "./order.controller";



const router = Router();

router.post('/create-order', orderController.createOrder)
router.get('/', orderController.getAllOrders)
router.get('/:id', orderController.getSingleOrder)
router.patch('/:id', orderController.updateOrder)
router.delete('/:id', orderController.deleteOrder)

export const orderRoutes = router;