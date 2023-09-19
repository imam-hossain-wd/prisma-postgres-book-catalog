"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const orderValidation_1 = require("./orderValidation");
const router = (0, express_1.Router)();
router.post('/create-order', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), (0, validationRequest_1.default)(orderValidation_1.OrderValidation.createOrderZodSchema), order_controller_1.orderController.createOrder);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.orderController.getAllOrders);
//  router.get('/my',
//  auth(ENUM_USER_ROLE.CUSTOMER),
//  orderController.getMyOrder)
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.orderController.getSingleOrder);
router.patch('/:id', (0, validationRequest_1.default)(orderValidation_1.OrderValidation.updateOrderZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), order_controller_1.orderController.updateOrder);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.orderController.deleteOrder);
exports.orderRoutes = router;
