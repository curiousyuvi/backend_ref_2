import jwt from "jsonwebtoken";
import User from "../models/User";
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // const token = req.cookies?.token;

    if (!token) {
      next();
      return false;
    }

    const data: any = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: data.email, token });
    if (!user) throw new Error();

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    next();
  }
};
export default auth;
