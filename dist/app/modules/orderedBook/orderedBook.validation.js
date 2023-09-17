"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderedBookValidation = void 0;
const zod_1 = require("zod");
const createOrderedBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        orderId: zod_1.z.string({
            required_error: 'orderId is required',
        }),
        bookId: zod_1.z.string({
            required_error: 'bookId is required',
        }),
        quantity: zod_1.z.number({
            required_error: 'quantity is required',
        }),
    }),
});
const updateOrderedBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        orderId: zod_1.z.string().optional(),
        bookId: zod_1.z.string().optional(),
        quantity: zod_1.z.number().optional(),
    }),
});
exports.OrderedBookValidation = {
    createOrderedBookZodSchema,
    updateOrderedBookZodSchema,
};
