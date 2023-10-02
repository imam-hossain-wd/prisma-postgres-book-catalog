import { z } from 'zod';

const bookSchema = z.object({
  bookId: z.string(),
  quantity: z.number().int().positive(),
});

const createOrderZodSchema = z.object({
  body: z.object({
    orderedBooks: z.array(bookSchema)
  }),
});

const updatedBookSchema = z.object({
  bookId: z.string().optional(),
  quantity: z.number().int().positive().optional(),
});

const updateOrderZodSchema = z.object({
    body: z.object({
      orderedBooks: z.array(updatedBookSchema)
      }),
});

export const OrderValidation = {
  createOrderZodSchema,
    updateOrderZodSchema,
};
