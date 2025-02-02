import { Types } from 'mongoose';

export type TBook = {
  name: string;
  price: number;
  author: Types.ObjectId;
  category: string;
};
