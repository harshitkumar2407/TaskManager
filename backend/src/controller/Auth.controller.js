const UserModel = require("../model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function RegisterUser(req, res) {
  try {
    const { name, email, username, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "Email is already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("3.1 ✅");
    const user = new UserModel({
      name: name.toLowerCase(),
      username: username ? username.toLowerCase() : undefined,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETS, {
      expiresIn: "1h",
    });

    console.log(name, email, username, password);

    res.cookie("token", token);
    res.cookie("name", user.name);
    res.cookie("email", user.email);
    res.cookie("username", user.username);
    res.cookie("id", user._id);

    console.log("6 ✅");

    res.status(200).json({
      message: "New user is Register",
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
        id: user._id,
      },
      token,
    });
  } catch (error) {
    console.log("Error in RegisterUser:", error);

    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
}

async function LoginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETS, {
      expiresIn: "1h",
    });
    res.cookie("token", token);
    res.cookie("name", user.name);
    res.cookie("email", user.email);
    res.cookie("id", user._id);

    res.status(200).json({
      message: "Login Successfull",
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
        id: user._id,
      },
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging in user", error: error.message });
  }
}

module.exports = {
  RegisterUser,
  LoginUser,
};
