import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { user, productName, price, color, size, address, phone } = req.body;
    const order = new Order({ user, productName, price, color, size, address, phone });
    await order.save();

    const io = req.app.get("io");
    io.emit("newOrder", order);

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to create order" });
  }
});

export default router;
