import mongoose from "mongoose";

const indexSchema = new mongoose.Schema({
  type: String,
  name: String,
  price: String,
  image: String,
});

const Service = mongoose.model("Service", indexSchema);
export default Service;
