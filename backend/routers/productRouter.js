import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  "/catalog/",
  expressAsyncHandler(async (req, res) => {
    if (req.query.model === "All" || req.query.price === "All") {
      if (req.query.model === "All" && req.query.price === "All") {
        // SHOW ALL PRODUCTS
        const product = await Product.find({});

        if (product) {
          res.send(product);
        } else {
          res.status(404).send({ message: "Product Not Found" });
        }
      } else if (req.query.model === "All") {
        // SHOW ALL MODELS AND FILTERED BY PRICE
        const product = await Product.find({}).find({ price: req.query.price });

        if (product) {
          res.send(product);
        } else {
          res.status(404).send({ message: "Product Not Found" });
        }
      } else {
        // SHOW ALL PRICE AND FILTERED BY MODEL
        const product = await Product.find({ name: req.query.model }).find({});

        if (product) {
          res.send(product);
        } else {
          res.status(404).send({ message: "Product Not Found" });
        }
      }
    } else {
      // SHOW FILTERED BY PRICE AND FILTERED BY MODEL
      const product = await Product.find({ name: req.query.model }).find({
        price: req.query.price,
      });

      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: "Product Not Found" });
      }
    }
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
