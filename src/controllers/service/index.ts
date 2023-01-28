import Service from "../../models/Service";

const serviceController = {
  async index(req, res) {
    try {
      const services = await Service.find();

      res.status(200).json({
        status: "success",
        data: services,
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
      const service = await Service.findById(id);
      res.status(200).json({ status: "success", data: service });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async create(req, res) {
    try {
      const service: any = new Service({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        type: req.body.type,
      });
      await service.save();
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
      const service = await Service.findByIdAndUpdate(
        id,
        { $set: req.body },
        { upsert: true, new: true }
      );

      res.status(200).json(service);
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
      await Service.findByIdAndDelete(id);

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
      await Service.deleteMany({});
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

export default serviceController;
