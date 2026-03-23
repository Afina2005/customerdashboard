const mongoose = require("mongoose");

const dashboardConfigSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  company: { type: String, default: "Halleyx" },
  layout: { type: Array, default: [] }
}, { timestamps: true });

module.exports = mongoose.model("DashboardConfig", dashboardConfigSchema);
