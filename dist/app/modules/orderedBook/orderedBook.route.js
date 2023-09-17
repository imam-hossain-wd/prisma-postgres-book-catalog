"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderedBookRoutes = void 0;
const express_1 = require("express");
const orderedBook_controller_1 = require("./orderedBook.controller");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const orderedBook_validation_1 = require("./orderedBook.validation");
const router = (0, express_1.Router)();
router.post('/create-ordered-book', (0, validationRequest_1.default)(orderedBook_validation_1.OrderedBookValidation.createOrderedBookZodSchema), orderedBook_controller_1.orderedBookController.createOrderedBook);
router.get('/', orderedBook_controller_1.orderedBookController.getAllOrderedBooks);
router.get('/:id', orderedBook_controller_1.orderedBookController.getSingleOrderedBook);
router.patch('/:id', (0, validationRequest_1.default)(orderedBook_validation_1.OrderedBookValidation.updateOrderedBookZodSchema), orderedBook_controller_1.orderedBookController.updateOrderedBook);
router.delete('/:id', orderedBook_controller_1.orderedBookController.deleteOrderedBook);
exports.orderedBookRoutes = router;
