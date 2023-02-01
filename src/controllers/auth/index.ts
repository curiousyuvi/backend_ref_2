import generateRandomString from "../../../src/helpers/generateUniqueRandomString";
import User from "../../models/User";
import axios from "axios";

const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user: any = await User.findByCredentials(email, password);

      if (!user) {
        throw new Error("User not found");
      }
      if (user === "invalid-password") {
        throw new Error("Invalid password");
      }

      if (user) await user.generateAuthToken();

      // res.cookie("token", user.token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === "production" ? true : false,
      //   maxAge: 1000 * 60 * 60 * 24 * 30,
      // });

      res.status(200).json({ status: "success", data: { user } });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async gauth(req, res) {
    try {
      const { access_token } = req.body;
      console.log("token", access_token);

      // const decoded: any = jwt.decode(token);
      // console.log("token", token);
      // console.log("decoded", decoded);
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" +
          access_token
      );

      console.log(response.data);

      // Get the email, first_name, and last_name from the response
      const email: string = response.data.email;
      const fname: string = response.data.given_name;
      const lname: string = response.data.family_name;
      // const user: any = await User.findByCredentials(email, password);
      const user: any = await User.findOne({ email });
      const genPassword = generateRandomString(8);

      if (!user) {
        const newUser: any = await User.create({
          fname,
          lname,
          email,
          password: genPassword,
        });
        await newUser.generateAuthToken();

        res.status(200).json({ status: "success", data: { user: newUser } });
      } else {
        await user.generateAuthToken();
        res.status(200).json({ status: "success", data: { user } });
      }

      // res.cookie("token", user.token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === "production" ? true : false,
      //   maxAge: 1000 * 60 * 60 * 24 * 30,
      // });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async logout(req, res) {
    try {
      // res.clearCookie("token", {
      //   httpOnly: true,
      //   expires: new Date(1),
      // });

      res.status(200).json({ status: "success", message: "User disconnected" });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
};
export default authController;
