import { model, Schema } from 'mongoose';
import { TBook } from './book.interface';
import { TOrderData } from './order.interface';

const orderSchema = new Schema<TOrderData>(
  {
    paymentMethod: {
      type: String,
      enum: ['cash', 'stripe'],
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
export const Order = model<TOrderData>('Order', orderSchema);
