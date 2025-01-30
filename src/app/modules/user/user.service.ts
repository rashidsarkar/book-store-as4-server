import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import jwt from 'jsonwebtoken';
import config from '../../config';

const createUserIntoDB = async (userData: TUser) => {
  console.log(userData);
  const existingUser = await User.isUserExists(userData.email);

  if (existingUser) {
    throw new AppError(StatusCodes.CONFLICT, 'Email is already in use');
  }

  await User.create(userData);
  const result = await User.findOne({ email: userData.email }).select(
    '_id name email role',
  );

  // Send back the user data along with a success message and token
  const jwtPayload = {
    email: result?.email,
    role: result?.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });

  // const refreshToken = jwt.sign(
  //   jwtPayload,
  //   config.jwt_refresh_secret as string,
  //   {
  //     expiresIn: '30d',
  //   },
  // );

  return {
    message: 'User registered successfully',
    user: result,
    token: accessToken,
  };
};
const loginUser = async (userData: TLoginUser) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (!existingUser) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  const jwtPayload = {
    email: existingUser.email,
    role: existingUser.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });
  return {
    token: accessToken,
  };
};
const getUserFromDb = async () => {
  const user = await User.find().select('_id name email role');
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }
  return user;
};

export const UserServices = {
  createUserIntoDB,
  loginUser,
  getUserFromDb,
};
