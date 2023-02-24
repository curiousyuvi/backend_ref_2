import mongoose from "mongoose";

const becomeFabricatorSchema = new mongoose.Schema({
  name: String,
  designation: String,
  phoneNumber: Number,
  companyLocation: String,
  companyName: String,
  yearsInBusiness: Number,
  partnersName: String,
  websiteLink: String,
  email: String,
  companySize: String,
  gstCertificate: String,
  passportPhoto: String,
  companyCertificate: String,
  cancelledCheque: String,
  companyLogo: String,
  exhibitionImage: String,
  Location: String,
  About: String,
  Services: [String],
  contactPhoneNumber: String,
  contactEmail: String,
  contactAddress: String,
  contactLinkdin: String,
  contactTwitter: String,
  contactFacebook: String,

  img1: String,
  img2: String,

  img3: String,
  img4: String,
  img5: String,
  img6: String,

});

const BecomeFabricator = mongoose.model(
  "BecomeFabricator",
  becomeFabricatorSchema
);
export default BecomeFabricator;
