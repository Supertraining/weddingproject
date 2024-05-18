'use server';
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);

    console.log(`DB connected with ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
