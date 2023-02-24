import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  phoneNumber: String,
});

const Lead = mongoose.model("lead", leadSchema);
export default Lead;
