const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address:     { type: String, required: true },
  postalCode:  { type: String, required: true },
  city:        { type: String, required: true },
  state:       { type: String, required: true },
  country:     { type: String, required: true },

  product:   { type: String, required: true },
  quantity:  { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true, min: 0 },
  status:    { type: String, enum: ["Pending", "Completed"], default: "Pending" },

  orderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
