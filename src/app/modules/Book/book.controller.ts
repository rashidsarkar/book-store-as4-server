import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const blogData = req.body;
  const author = req.tokenUser.email;
  //   const result = await BlogServices.createBlogIntoDb(blogData, author);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});
export const BookControllers = {
  createBook,
};
