import Stripe from 'stripe';
import config from '../../config';

const stripe = new Stripe(config.stripe_s_key, {
  apiVersion: '2023-10-16', // Use the latest API version
});

export default stripe;
