const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// require("dotenv").config();

const SECRET = process.env.SECRET;

module.exports = {
  // registerOld :(req, res) => {
  //   User
  //     .create(req.body)
  //     .then(response => {
  //       res.status(201).json(response)
  //     })
  //     .catch(response => {
  //       res.status(500).json(response)
  //     })
  // },
  register: async (req, res) => {
    // Register With Async
    try {
      const user = new User(req.body);
      const newUser = await user.save();
      const userToken = jwt.sign({ id: newUser._id }, SECRET); // Declaring Token
      console.log(`User ID: ${newUser._id}\nUser Token:${userToken}`);
      res
        .status(201)
        .cookie("userToken", userToken, { httpOnly: true }) // SENDING COOKIE
        .json(newUser);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  login: async (req, res) => {
    // FUN WITH LOGIN!
    const userFromDB = await User.findOne({ email: req.body.email });
    if (!userFromDB) {
      res.status(400).json({ error: "User Not Found" });
    } else {
      try {
        const isPasswordValid = await bcrypt.compare(
          req.body.password,
          userFromDB.password
        );
        if (isPasswordValid) {
          const userToken = jwt.sign({ id: userFromDB._id }, SECRET); // Declaring Token
          console.log(
            `User ID ${userFromDB._id}\nUser Token:-----${userToken}-----`
          );
          res
            .status(200)
            .cookie("userToken", userToken, { httpOnly: true }) // SENDING COOKIE
            .json({ message: "User Logged IN successfully !" });
        } else {
          console.log("Password incorrect for user:", email);
          res.status(400).json({ message: "Password incorrect!" });
        }
      } catch (error) {
        res.status(400).json({ message: "Email / Password incorrect!", error });
      }
    }
  },

  logout: async (req, res) => {
    try {
      // console.log("********", req.cookies.userToken);
      res.clearCookie("userToken");
      res.status(200).json({ message: "User Logged out Successfully" });
    } catch {
      res.status(500).json({message:"Something went wrong", error})
    }
  },

  getLoggedUser: async (req, res) => {
    try {
      const userToken = req.cookies.userToken;
      const loggedUserId = jwt.verify(userToken, SECRET)
      // console.log(`userToken: ${userToken}\nUser Id: ${loggedUserId}`);
      
      const user = await User.findOne({_id:loggedUserId.id})
      res.status(200).json({message:"User Found", user})
    }
    catch(error) {
      console.log(error);
      res.status(500).json({message:"No Token Provided"})
    }
  },
};
