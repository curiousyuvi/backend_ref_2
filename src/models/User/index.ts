import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import uniqueValidator from 'mongoose-unique-validator'

// export interface

// export interface IUser extends mongoose.Document {
//   [key: string]: any
// }

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please provide your first name"],
      trim: true,
    },
    lname: {
      type: String,
      required: [true, "Please provide your last name"],
      trim: true,
    },
    role: {
      type: String,
      enum: ["client", "fabricator", "admin"],
      required: [true, "Please provider your userRole"],
      default: "client",
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Please provide your email"],
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      minLength: 8,
    },
    token: String,
  },
  {
    timestamps: true,
  }
);
// userSchema.plugin(uniqueValidator)

userSchema.pre("save", async function (next) {
  const user: any = this;
  if (!user?.isModified("password")) return next();
  user.password = await bcrypt.hash(user.password, 12);
  user.passwordConfirm = undefined;
  next();
});

userSchema.methods.generateAuthToken = async function () {
  // Generate an auth token for the user
  const user: any = this;

  const userData: any = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(userData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFE,
  });

  // const refreshToken = jwt.sign(
  //   user,
  //   config.refreshTokenSecret,
  //   { expiresIn: config.refreshTokenLife },
  // )

  // user.tokens = []
  // user.tokens = user.tokens.concat({ token })
  user.token = token;

  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user: any = await User.findOne({ email });
  if (!user) return false;
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) return "invalid-password";

  return user;
};

const User: any = mongoose.model("User", userSchema);
export default User;
