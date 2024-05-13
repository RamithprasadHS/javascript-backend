import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectdb = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`mongo db is connected !! DB host : ${connectdb.connection.host}`);
  } catch (error) {
    console.log("db is not connected", error);
    process.exit(1);
  }
};

export default connectDb;
