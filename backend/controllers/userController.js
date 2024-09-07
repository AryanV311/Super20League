import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//^ user login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.json({ success:false, message:"Invalid Credential" });
    }

    const token = createToken(user._id)
    console.log(token);
    res.json({success:true, token})
  } catch (error) {
    res.json({success:false, message:"Error"})
  }
};

//? Creating Token
const createToken = (id) => {
  return jwt.sign(
    { id },
     process.env.JWT_SECRET, 
     {
    expiresIn:'30d' 
     }
);
};

//^ register
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    //? checking user exist
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exist" });
    }

    //? validatig email format and password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //* Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashPassword,
    });

    const user = newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
