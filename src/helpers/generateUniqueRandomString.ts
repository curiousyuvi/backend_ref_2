import crypto from "crypto";

const generateRandomString = (size: number) => {
  return crypto.randomBytes(4).toString("hex").slice(0, size);
  return "";
};

export default generateRandomString;
