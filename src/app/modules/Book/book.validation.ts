import { Types } from 'mongoose';
import { z } from 'zod';

const createBookValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Book name is required',
    }),
    image: z.string({
      required_error: 'Book image is required',
    }),
    price: z
      .number({
        required_error: 'Price is required',
      })
      .positive('Price must be a positive number'),

    author: z.string({
      required_error: 'Author is required',
    }),
    category: z.string({
      required_error: 'Category is required',
    }),
  }),
});

const updateBookValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Book name is required',
      })
      .optional(),
    image: z
      .string({
        required_error: 'Book image is required',
      })
      .optional(),
    price: z.number().positive('Price must be a positive number').optional(),
    author: z
      .string({
        required_error: 'Author is required',
      })
      .optional(),
    category: z.string().optional(),
  }),
});

export const BookValidation = {
  createBookValidationSchema,
  updateBookValidationSchema,
};
