import dbConnect from "../../../lib/mongoconnect";

import product from "../../../models/product";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const { token } = cookies;
  await dbConnect();

  if (method === "GET") {
    const products = await product.find();
    res.status(200).json(products);
  }
  if (method === "POST") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not authorised");
    }
    try {
      const pizza = await product.create(req.body);
      res.status(201).json(pizza);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
