import axios from "axios";
import BecomeFabricator from "../../models/BecomeFabricator";

const becomeFabricatorController = {
  async index(req, res) {
    try {
      let becomeFabricator = [];

      becomeFabricator = await BecomeFabricator.find();

      res.status(200).json({
        status: "success",
        data: becomeFabricator,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
  async show(req, res) {
    const { id } = req.params;
    try {
      const becomeFabricator = await BecomeFabricator.findById(id);
      res.status(200).json({ status: "success", data: becomeFabricator });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async create(req, res) {
    try {

      const becomeFabricator: any = new BecomeFabricator(
        // name: req.body.name,
        // designation: req.body.designation,
        // phoneNumber: req.body.phoneNumber,
        // companyLocation: req.body.companyLocation,
        // companyName: req.body.companyName,
        // yearsInBusiness: req.body.yearsInBusiness,
        // partnersName: req.body.partnersName,
        // websiteLink: req.body.websiteLink,
        // email: req.body.email,
        // companySize: req.body.companySize,
        // gstCertificate: req.body.gstCertificate,
        // passportPhoto: req.body.passportPhoto,
        // companyCertificate: req.body.companyCertificate,
        // cancelledCheque: req.body.cancelledCheque,
        // exhibitionImage: req.body.exhibitionImage,
        // companyLogo: req.body.companyLogo,
        // Location: req.body.Location,
        // About: req.body.About,
        // Services: req.body.Services,
        // contactPhoneNumber: req.body.contactPhoneNumber,
        // contactEmail: req.body.contactEmail,
        // contactAddress: req.body.contactAddress,
        // contactLinkdin: req.body.contactLinkdin,
        // contactTwitter: req.body.contactTwitter,
        // contactFacebook: req.body.contactFacebook,
        // img1: req.body.img1,
        // img2: req.body.img2,
        // img3: req.body.img3,
        // img4: req.body.img4,
        // img5: req.body.img5,
        // img6: req.body.img6,
        req.body
      );

    

      await becomeFabricator.save();
      res
        .status(200)
        .json({ status: "success", message: "new fabricator created" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const becomeFabricator = await BecomeFabricator.findByIdAndUpdate(
        id,
        { $set: req.body },
        { upsert: true, new: true }
      );

      res.status(200).json(becomeFabricator);
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
  async deleteItem(req, res) {
    try {
      const { id } = req.params;
      await BecomeFabricator.findByIdAndDelete(id);

      res
        .status(200)
        .json({ status: "success", message: "fabricator deleted" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
  async deleteAll(req, res) {
    try {
      await BecomeFabricator.deleteMany({});
      res
        .status(200)
        .json({ status: "success", message: "All fabricator deleted" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
};

export default becomeFabricatorController;
