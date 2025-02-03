import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookService } from './book.service';
import { Request, Response } from 'express';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const bookData = req.body;
  const bookDataWithModify = {
    ...bookData,
    price: Number(bookData.price),
  };
  console.log(bookData);

  const result = await BookService.createBookIntoDb(bookData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Book created successfully',
    data: result,
  });
});
export const BookControllers = {
  createBook,
};
