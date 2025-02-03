import QueryBuilder from '../../builder/QueryBuilder';
import { TBook } from './book.interface';
import { Book } from './book.model';

const createBookIntoDb = async (payload: TBook) => {
  const bookData = {
    ...payload,
    price: Number(payload.price),
  };
  //   console.log(payload.price);
  const blog = await Book.create(bookData);

  return blog;
};
const getAllBookFromDb = async (query: Record<string, unknown>) => {
  //   console.log(payload.price);
  const searchAbleFields = ['name', 'author', 'category'];
  const bookAfterFilter = new QueryBuilder(Book.find(), query)
    .search(searchAbleFields)
    .filter()
    .sort();

  const result = await bookAfterFilter.modelQuery.select(
    '_id name content author quantity image price category description publicationYear',
  );
  // console.log('result', result);

  return result;
};

export const BookService = { createBookIntoDb, getAllBookFromDb };
