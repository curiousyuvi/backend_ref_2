import Lead from "../../models/lead";

const contactController = {
  async create(req, res) {
    console.log("reached herer");
    try {
      const lead: any = new Lead({
        phoneNumber: req.body.phoneNumber,
      });
      await lead.save();
      res.status(200).json({ status: "success", message: "Phone Number send" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
};

export default contactController;
