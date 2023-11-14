const product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { name, company, featured, $or, sort, select } = req.query;

  const queryParameter = {};

  if (name) {
    queryParameter.name = { $regex: name, $options: "i" };
  }
  if (company) {
    queryParameter.company = company;
  }
  if (featured) {
    queryParameter.featured = featured;
  }
  // Handle $or conditions
  if ($or && Array.isArray($or)) {
    const orConditions = $or.map((condition) => {
      const key = Object.keys(condition)[0];
      const value = condition[key];
      return { [key]: value };
    });
    queryParameter.$or = orConditions;
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;

  let appData = product.find(queryParameter);
  if (sort) {
    let resolvedSort = sort.split(",").join(" ");
    appData = appData.sort(resolvedSort);
  }

  if (select) {
    let resolvedSelect = select.split(",").join(" ");
    appData = appData.select(resolvedSelect);
  }

  console.log(queryParameter);
  const myData = await appData.skip(skip).limit(limit);
  res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
  // const { name, sort } = req.query;
  // if (sort) {
  //   let resolveSort = sort.split(",").join(" ");
  // }
  const appData = await product.find(req.query).select("price name company");
  return res.status(200).json({ appData, nbHits: appData.length });
};

module.exports = { getAllProducts, getAllProductsTesting };
