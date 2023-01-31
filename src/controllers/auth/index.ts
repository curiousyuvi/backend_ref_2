import User from "../../models/User";

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
