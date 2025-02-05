import { Types } from 'mongoose';

export interface TOrderData {
  product: Types.ObjectId;
  quantity: number;
  userId: Types.ObjectId;
  paymentMethod: 'cash' | 'stripe';
  totalPrice: number;
}
