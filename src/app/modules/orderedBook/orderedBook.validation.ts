import { z } from 'zod';

const createOrderedBookZodSchema = z.object({
  body: z.object({
    orderId: z.string({
      required_error: 'orderId is required',
    }),
    bookId: z.string({
      required_error: 'bookId is required',
    }),
    quantity: z.number({
      required_error: 'quantity is required',
    }),
  }),
});

const updateOrderedBookZodSchema = z.object({
  body: z.object({
    orderId: z.string().optional(),
    bookId: z.string().optional(),
    quantity: z.number().optional(),
  }),
});

export const OrderedBookValidation = {
  createOrderedBookZodSchema,
  updateOrderedBookZodSchema,
};
