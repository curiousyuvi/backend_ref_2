import mongoose from "mongoose";

const quotationSchema = new mongoose.Schema({
  name: String,
  startDate: Number,
  endDate: Number,
  eventLocation: String,
  eventName: String,
  design: String,
  budget: String,
  floorPlan: String,
  standType: String,
  email: String,
  phoneNumber: Number,
  otherItems: String,
  standSizeLength: Number,
  standSizeBreadth: Number,
});

const Quotation = mongoose.model("Quotation", quotationSchema);
export default Quotation;
