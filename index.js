import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDb from "./config/db.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
connectDb();
app.get("/", (req, res) => {
  res.json("Api is Running");
});

app.use("/api/users", userRoutes);
app.listen(port, console.log(`server started on ${port}`));
