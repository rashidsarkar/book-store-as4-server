import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { USER_ROLE } from '../user/user.const';
import auth from '../../middlewares/auth';
import { BookValidation } from './book.validation';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(BookValidation.createBookValidationSchema),
  BlogControllers.createBlog,
);
// router.patch(
//   '/:id',
//   auth(USER_ROLE.user),
//   validateRequest(BlogValidation.updateBlogValidationSchema),
//   BlogControllers.updateBlog,
// );
// router.delete('/:id', auth(USER_ROLE.user), BlogControllers.deleteBlog);
// router.get('/', BlogControllers.getAllBlog);

export const BookRoutes = router;
