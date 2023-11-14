require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const app = express();

const PORT = process.env.PORT || 5000;

const product_route = require("./routes/products");

app.get("/", (req, res) => {
  res.send(`Hi I am live`);
});

app.use("/api/products", product_route);

const start = async () => {
  try {
    await connectDB(process.env.MongoDB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} I am running`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
