import { StatusCodes } from 'http-status-codes';

import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const orderData = req.body;

  //   console.log(orderDataWithModify);

  const result = await OrderService.createOrderIntoDb(orderData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Secret created successfully',
    data: result,
  });
});
const createOrderPayment = catchAsync(async (req: Request, res: Response) => {
  const orderData = req.body;

  //   console.log(orderDataWithModify);

  const result = await OrderService.createOrderPaymentIntoDb(orderData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  createOrderPayment,
};
// const getAllBook = catchAsync(async (req: Request, res: Response) => {
//   const query = req.query;
//   // console.log(query);
//   const result = await BookService.getAllBookFromDb(query);
//   sendResponse(res, {
//     statusCode: StatusCodes.CREATED,
//     success: true,
//     message: 'Book fetched successfully',
//     data: result,
//   });
// });
// const getSingleBook = catchAsync(async (req: Request, res: Response) => {
//   const { idx } = req.params;
//   // console.log(idx);
//   // console.log(query);
//   const result = await BookService.getSingleBookbyId(idx);
//   sendResponse(res, {
//     statusCode: StatusCodes.CREATED,
//     success: true,
//     message: 'Book fetched successfully',
//     data: result,
//   });
// });
// const updateBook = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await BookService.updateBookIntoDb(id, req.body);

//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     success: true,
//     message: 'Book updated successfully',
//     data: result,
//   });
// });
// const deletedBook = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await BookService.deletedBookbyId(id);

//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     success: true,
//     message: 'Book Deleted successfully',
//     data: result,
//   });
// });
