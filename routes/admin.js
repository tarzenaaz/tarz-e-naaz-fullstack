import express from "express";
import mongoose from "mongoose";
import Order from "../models/Order.js";
import User from "../models/User.js";

const router = express.Router();

// Get all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// Delete order
router.delete("/orders/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ success: false, message: "Invalid order ID" });
  }
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete order" });
  }
});

// Mark order as completed
router.put("/orders/:id/complete", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ success: false, message: "Invalid order ID" });
  }
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = "Completed";
    await order.save();
    res.json({ success: true, message: "Order marked as completed", order });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update order" });
  }
});

export default router;
