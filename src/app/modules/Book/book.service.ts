import { TBook } from './book.interface';
import { Book } from './book.model';

const createBookIntoDb = async (payload: TBook) => {
  const bookData = {
    ...payload,
    price: Number(payload.price),
  };
  console.log(payload.price);
  const blog = await Book.create(bookData);

  return blog;
};

export const BookService = { createBookIntoDb };
