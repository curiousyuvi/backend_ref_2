import User from "../models/User";

const checkIfExists = async (email: string) => {
  try {
    const document = await User.findOne({ email });
    if (document) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export default checkIfExists;
