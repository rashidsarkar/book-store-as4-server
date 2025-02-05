import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { USER_ROLE } from '../user/user.const';
import auth from '../../middlewares/auth';
import { BookValidation } from './book.validation';
import { BookControllers } from './book.controller';
import { OrderValidation } from './order.validation';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(OrderValidation.createOrderValidationSchema),
  OrderControllers.createOrder,
);
// router.patch(
//   '/:id',
//   auth(USER_ROLE.admin),
//   validateRequest(BookValidation.updateBookValidationSchema),
//   BookControllers.updateBook,
// );
// router.delete('/:id', auth(USER_ROLE.admin), BookControllers.deletedBook);
// router.get('/', BookControllers.getAllBook);
// router.get('/book/:idx', BookControllers.getSingleBook);

export const OrderRoutes = router;
