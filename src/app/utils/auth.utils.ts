import jwt from 'jsonwebtoken';
import config from '../config';

const createToken = (jwtPayload) => {
  jwt.sign(jwtPayload, config.jwt_refresh_secret as string, {
    expiresIn: '30d',
  });
};
