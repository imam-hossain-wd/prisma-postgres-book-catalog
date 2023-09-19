import { UserRole } from '@prisma/client';
import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
    password: z.number({
      required_error: 'password is required',
    }),
    role: z.enum([UserRole.admin, UserRole.customer], {
      required_error: 'role is required and must be one of admin, customer',
    }),
    contactNo: z.number({
      required_error: 'contactNo is required',
    }),

    address: z.string({
      required_error: 'address is required',
    }),
    profileImg: z.string({
      required_error: 'profileImg is required',
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    role: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImg: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
