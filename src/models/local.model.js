const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const storeSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 200,
      required: true,
      unique: true,
    },
    address: {
      street: {
        type: String,
        maxlength: 200,
        required: true,
      },
      house_number: {
        type: Number,
        required: true,
      },
      floor: {
        type: String,
        maxlength: 20,
      },
      cp: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        maxlength: 200,
        required: true,
      },
    },
    phone_number: {
      type: String,
      maxlength: 20,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      maxlength: 200,
      required: true,
      unique: true,
    },
    automac: {
      type: Boolean,
      required: true,
    },
    twenty_four: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);
const Local = mongoose.model("Local", storeSchema);

module.exports = { Local };
