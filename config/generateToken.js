import jwt from "jsonwebtoken";
const generateToken = (id) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign({ id }, secret, {
    expiresIn: "1d",
  });
};

export default generateToken;
