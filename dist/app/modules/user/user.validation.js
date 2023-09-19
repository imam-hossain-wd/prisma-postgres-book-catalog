"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        email: zod_1.z.string({
            required_error: 'email is required',
        }),
        password: zod_1.z.number({
            required_error: 'password is required',
        }),
        role: zod_1.z.enum([client_1.UserRole.admin, client_1.UserRole.customer], {
            required_error: 'role is required and must be one of admin, customer',
        }),
        contactNo: zod_1.z.number({
            required_error: 'contactNo is required',
        }),
        address: zod_1.z.string({
            required_error: 'address is required',
        }),
        profileImg: zod_1.z.string({
            required_error: 'profileImg is required',
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        role: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        profileImg: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};
