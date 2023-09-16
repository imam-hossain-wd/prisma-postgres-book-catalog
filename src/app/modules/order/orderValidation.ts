import { OrderStatus } from '@prisma/client';
import { z } from 'zod';

const createOrderZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'userId is required',
    }),
    orderedBooks: z.array(z.unknown()).nonempty({
        message: 'orderedBooks is required and must not be empty',
      }),
    status:z.enum([OrderStatus.DEVIVERED, OrderStatus.PENDING, OrderStatus.SHIPPED],{
        required_error: 'status is required and must be one of PENDING, PROCESSING, SHIPPED, or DELIVERED'
    }),
  }),
});

const updateOrderZodSchema = z.object({
    body: z.object({
        userId: z.string().optional(),
        orderedBooks: z.array(z.unknown()).optional(),
        status:z.enum([OrderStatus.DEVIVERED, OrderStatus.PENDING, OrderStatus.SHIPPED]).optional(),
      }),
});

export const OrderValidation = {
    createOrderZodSchema,
    updateOrderZodSchema,
};
