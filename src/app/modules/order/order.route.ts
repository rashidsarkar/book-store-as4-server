import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { USER_ROLE } from '../user/user.const';
import auth from '../../middlewares/auth';
import { OrderValidation } from './order.validation';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),

  OrderControllers.createOrder,
);
router.post(
  '/create-order-with-Payment',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(OrderValidation.createOrderValidationSchema),
  OrderControllers.createOrderPayment,
);
// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     ui_mode: 'embedded',
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
//   });

//   res.send({clientSecret: session.client_secret});
// });

export const OrderRoutes = router;
// router.patch(
//   '/:id',
//   auth(USER_ROLE.admin),
//   validateRequest(BookValidation.updateBookValidationSchema),
//   BookControllers.updateBook,
// );
// router.delete('/:id', auth(USER_ROLE.admin), BookControllers.deletedBook);
// router.get('/', BookControllers.getAllBook);
// router.get('/book/:idx', BookControllers.getSingleBook);
