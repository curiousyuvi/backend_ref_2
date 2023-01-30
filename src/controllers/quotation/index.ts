import Quotation from "../../models/Quotation";

const quotationController = {
  async index(req, res) {
    try {
      let quotations = [];

      quotations = await Quotation.find();

      res.status(200).json({
        status: "success",
        data: quotations,
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
      const quotation = await Quotation.findById(id);
      res.status(200).json({ status: "success", data: quotation });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async create(req, res) {
    try {
      const quotation: any = new Quotation({
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        eventLocation: req.body.eventLocation,
        design: req.body.design,
        budget: req.body.budget,
        floorPlan: req.body.floorPlan,
        standType: req.body.standType,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        otherItems: req.body.otherItems,
        standSize: req.body.standSize,
      });
      await quotation.save();
      res.status(200).json({ status: "success", message: "Service created" });
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
      const quotation = await Quotation.findByIdAndUpdate(
        id,
        { $set: req.body },
        { upsert: true, new: true }
      );

      res.status(200).json(quotation);
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
      await Quotation.findByIdAndDelete(id);

      res.status(200).json({ status: "success", message: "Service deleted" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
  async deleteAll(req, res) {
    try {
      await Quotation.deleteMany({});
      res
        .status(200)
        .json({ status: "success", message: "All services deleted" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
};

export default quotationController;
