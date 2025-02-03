import { Types } from 'mongoose';

export type TBook = {
  name: string;
  image: string;
  price: number;
  author: string;
  category: string;
};
