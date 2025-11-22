import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server as IOServer } from "socket.io";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// (your routes) — example if you import routes:
// import adminRoutes from "./routes/admin.js";
// app.use("/api/admin", adminRoutes);

const httpServer = createServer(app);
const io = new IOServer(httpServer, {
  cors: { origin: "*" } // change origin to your frontend domain in production
});

io.on("connection", (socket) => {
  console.log("⚡ Socket connected");
  socket.on("disconnect", () => console.log("Socket disconnected"));
});

// Connect MongoDB
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not set. Set MONGO_URI in environment variables.");
} else {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.error("❌ MongoDB Connection Failed:", err));
}

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
