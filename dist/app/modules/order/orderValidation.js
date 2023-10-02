"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const zod_1 = require("zod");
const bookSchema = zod_1.z.object({
    bookId: zod_1.z.string(),
    quantity: zod_1.z.number().int().positive(),
});
const createOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        orderedBooks: zod_1.z.array(bookSchema)
    }),
});
const updatedBookSchema = zod_1.z.object({
    bookId: zod_1.z.string().optional(),
    quantity: zod_1.z.number().int().positive().optional(),
});
const updateOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        orderedBooks: zod_1.z.array(updatedBookSchema)
    }),
});
exports.OrderValidation = {
    createOrderZodSchema,
    updateOrderZodSchema,
};
