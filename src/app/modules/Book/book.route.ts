import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { USER_ROLE } from '../user/user.const';
import auth from '../../middlewares/auth';
import { BookValidation } from './book.validation';
import { BookControllers } from './book.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(BookValidation.createBookValidationSchema),
  BookControllers.createBook,
);
// router.patch(
//   '/:id',
//   auth(USER_ROLE.user),
//   validateRequest(BlogValidation.updateBlogValidationSchema),
//   BlogControllers.updateBlog,
// );
// router.delete('/:id', auth(USER_ROLE.user), BlogControllers.deleteBlog);
router.get('/', BookControllers.getAllBook);

export const BookRoutes = router;
