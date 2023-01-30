import mongoose from "mongoose";

const quotationSchema = new mongoose.Schema({
  name: String,
  startDate: Number,
  endDate: Number,
  eventLocation: String,
  design: String,
  budget: String,
  floorPlan: String,
  standType: Number,
  email: String,
  phoneNumber: Number,
  otherItems: String,
  standSize: String,
});

const Quotation = mongoose.model("Quotation", quotationSchema);
export default Quotation;
