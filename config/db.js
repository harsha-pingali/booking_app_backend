import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log(uri);
    const con = await mongoose.connect(uri);
    console.log("DB Connected Successfully !" + con.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
