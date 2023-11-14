require("dotenv").config();
const connectDB = require("./db/connect");

const product = require("./models/products");

const productJson = require("./productData.json");

const start = async () => {
  try {
    await connectDB(process.env.MongoDB_URL);
    await product.create(productJson);
    console.log(`Success`);
  } catch (error) {
    console.log(error);
  }
};

start();
