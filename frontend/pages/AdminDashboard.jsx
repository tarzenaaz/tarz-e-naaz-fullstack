import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("http://localhost:5000");

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch Orders
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5000/api/admin/orders");
    const data = await res.json();
    setOrders(data);
  };

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/api/admin/users");
    const data = await res.json();
    setUsers(data);
  };

  // Delete Order
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/orders/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        alert(data.message);
        setOrders(orders.filter((o) => o._id !== id));
      }
    } catch (err) {
      alert("Failed to delete order");
    }
  };

  // Mark Order Completed
  const handleComplete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/orders/${id}/complete`,
        { method: "PUT" }
      );
      const data = await res.json();
      if (data.success) {
        alert(data.message);
        setOrders(
          orders.map((o) => (o._id === id ? { ...o, status: "Completed" } : o))
        );
      }
    } catch (err) {
      alert("Failed to update order");
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchUsers();

    // Listen for real-time orders
    socket.on("newOrder", (order) => {
      setOrders((prev) => [order, ...prev]);
      toast.info(
        `New Order: ${order.productName} by ${order.user?.email || "Guest"}`
      );
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Orders */}
        <div className="bg-white shadow-lg p-4 rounded-2xl">
          <h2 className="text-xl font-semibold mb-3">🛍 All Orders</h2>
          <ul>
            {orders.map((order) => (
              <li key={order._id} className="border-b py-2">
                <p>
                  <strong>Order ID:</strong> {order._id}
                </p>
                <p>
                  <strong>User:</strong> {order.user?.email || "Guest"}
                </p>
                <p>
                  <strong>Product:</strong> {order.productName}
                </p>
                <p>
                  <strong>Price:</strong> Rs {order.price}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {order.status ? order.status : "Pending"}
                </p>
                <div className="mt-2 flex gap-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    onClick={() => handleComplete(order._id)}
                  >
                    Mark Completed
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Users */}
        <div className="bg-white shadow-lg p-4 rounded-2xl">
          <h2 className="text-xl font-semibold mb-3">👥 Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id} className="border-b py-2">
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>ID:</strong> {user._id}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default AdminDashboard;


