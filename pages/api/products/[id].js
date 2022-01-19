import dbConnect from "../../../lib/mongoconnect";

import product from "../../../models/product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    const single = await product.findById(id);
    res.status(200).json(single);
  }
  if (method === "POST") {
    try {
      const pizza = await product.create(req.body);
      res.status(201).json(pizza);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method == "PUT") {
  }
  if (method == "DELETE") {
  }
}
