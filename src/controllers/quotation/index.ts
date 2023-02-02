import axios from "axios";
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
    const hstartDate = new Date(req.body.startDate * 1000);
    const hendDate = new Date(req.body.endDate * 1000);

    try {
      await axios.post(
        "https://sheet.best/api/sheets/07da17a3-60e5-4d44-bd0e-dae194e1ac3f/tabs/Quotations",
        {
          ...req.body,
          startDate: hstartDate.toLocaleString(),
          endDate: hendDate.toLocaleString(),
        }
      );
      const quotation: any = new Quotation(req.body);
      await quotation.save();
      res.status(200).json({ status: "success", message: "Quotation created" });
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

      res.status(200).json({ status: "success", message: "Quotation deleted" });
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
        .json({ status: "success", message: "All Quotation deleted" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
};

export default quotationController;
