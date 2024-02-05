import asyncHandler from "express-async-handler";
import user from "../models/userModel.js";
import generateToken from "../config/generateToken.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //console.log("Controller " + email);
  try {
    let newUser = await user.findOne({ email });
    if (newUser) {
      res.status(400);
      throw new Error(`User with mail ${email} already exists`);
    }
    //console.log(req.body);
    newUser = await user.create({ email, password, firstName, lastName });
    // console.log(newUser);
    const token = generateToken(newUser?._id);
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    return res.sendStatus(200);
  } catch (error) {
    throw new Error(error.message);
  }
});
