const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Mangoose Database Connection

mongoose.connect(
  "mongodb+srv://ammaryasir:Mangoose@cluster0.zwd3brq.mongodb.net/ecom"
);
//Api connection

app.get("/", (req, res) => {
  res.send("app is running");
});

//store images
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });
app.use("./images", express.static("./upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    img_url: `http://localhost/${port}/images/${req.file.filename}`,
  });
});
//schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

//adding the products in the database

app.post("/addproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    let id;

    if (products.length > 0) {
      const lastProduct = products[products.length - 1];
      id = lastProduct.id + 1;
    } else {
      id = 1;
    }

    const product = new Product({
      id: id,
      name: req.body.name,
      category: req.body.category,
      old_price: req.body.old_price,
      new_price: req.body.new_price,
      image: req.body.image,
    });

    console.log(product);
    await product.save();
    console.log("Product saved");

    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});

// deleting the product from database api

app.delete("/deleteproduct", async (req, res) => {
  try {
    const productId = req.body.id;

    // Check if the product with the given id exists
    await Product.findOneAndDelete({ id:productId });

    res.json({
      success: true,
      name: req.body.name,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});
//getting the product from the database

app.get("/getproducts", async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find({});

    res.json({
      success: true,
      products: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});




app.listen(port, (error) => {
  if (!error) {
    console.log("connected");
  } else {
    console.log("not connected");
  }
});
