"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const createOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: 'userId is required',
        }),
        orderedBooks: zod_1.z.array(zod_1.z.unknown()).nonempty({
            message: 'orderedBooks is required and must not be empty',
        }),
        status: zod_1.z.enum([client_1.OrderStatus.DEVIVERED, client_1.OrderStatus.PENDING, client_1.OrderStatus.SHIPPED], {
            required_error: 'status is required and must be one of PENDING, PROCESSING, SHIPPED, or DELIVERED'
        }),
    }),
});
const updateOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        orderedBooks: zod_1.z.array(zod_1.z.unknown()).optional(),
        status: zod_1.z.enum([client_1.OrderStatus.DEVIVERED, client_1.OrderStatus.PENDING, client_1.OrderStatus.SHIPPED]).optional(),
    }),
});
exports.OrderValidation = {
    createOrderZodSchema,
    updateOrderZodSchema,
};
