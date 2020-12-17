import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/bing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
