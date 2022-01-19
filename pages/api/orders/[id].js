import dbConnect from "../../../lib/mongoconnect";

import Order from "../../../models/order";
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  await dbConnect();

  if (method === "GET") {
    const single = await Order.findById(id);
    res.status(200).json(single);
  }

  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
