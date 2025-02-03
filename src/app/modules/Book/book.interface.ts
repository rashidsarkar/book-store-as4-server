import { Types } from 'mongoose';

export type TBook = {
  name: string;
  image: string;
  price: number;
  quantity: number;
  author: string;
  publicationYear: number;
  category: string;
  description: string;
};
