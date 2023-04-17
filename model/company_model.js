const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const companiSchema = new mongoose.Schema({
  companiName: {
    type: String,
  },
  companiId: {
    type: Number,
    unique: true,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    unique: true,
  },
  dateOfRigester: {
    type: Date,
  },
  employee: {
    type: mongoose.Types.ObjectId,
    ref: "employee",
  },
});

module.exports = mongoose.model("compani", companiSchema);
