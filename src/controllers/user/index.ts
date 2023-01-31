import checkIfExists from "../../helpers/checkUserExists";
import { sendVerificationEmail } from "../../helpers/sendVerificationEmail";
import User from "../../models/User";
import jwt from "jsonwebtoken";

const userController = {
  async index(req, res) {
    try {
      const user = await User.find();
      res.status(200).json({
        status: "success",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      res.status(200).json({ status: "success", data: user });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
  async loggedUser(req, res) {
    console.log("reached here", req.user);
    try {
      const user: any = await User.findById(req.user._id);
      res.status(200).json({ status: "success", data: user });
    } catch (error) {
      console.log(error);

      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async verify(req, res) {
    try {
      const { token } = req.params;
      const data: any = jwt.verify(token, process.env.JWT_SECRET);
      const user: any = await User.create(data.data);
      await user.generateAuthToken();
      await user.save();

      // res.cookie("token", user.token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === "production" ? true : false,
      //   maxAge: 1000 * 60 * 60 * 24 * 30,
      // });
      delete user.password;
      res.status(200).json({
        status: "success",
        message: "User created",
        data: { user },
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async create(req, res) {
    try {
      const userData = req.body;
      const exists = await checkIfExists(userData?.email);

      if (exists)
        res.status(403).json({
          status: "failute",
          message: "Email already exists",
        });
      else {
        await sendVerificationEmail(userData?.email, userData);
        res.status(200).json({
          status: "success",
          message: "Verfication email sent",
        });
      }
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
      await User.findByIdAndUpdate(
        id,
        { $set: req.body },
        { upsert: false, new: true }
      );

      res.status(200).json({ status: "success", message: "User updated" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);

      res.status(200).json({ status: "success", message: "User deleted" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async deleteAll(req, res) {
    try {
      await User.deleteMany({});
      res.status(200).json({ status: "success", message: "All users deleted" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
};

export default userController;
