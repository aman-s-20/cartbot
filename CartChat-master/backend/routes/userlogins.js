const router = require("express").Router();
const User = require("../models/userlogins.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/default.json");

// @route POST /userlogins/register
// @desc Registers a new user
router.post("/register", (req, res) => {
  let { name, email, password, contactno } = req.body;
  contactno = parseInt(contactno);
  try {
    User.findOne({ email }).then((user) => {
      if (user) {
        return res.status(400).json("Email already exists");
      } else {
        const newUser = new User({
          name,
          email,
          password,
          contactno,
        });
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(() =>
              res
                .status(200)
                .send({ msg: "New user created successfully", post: newUser })
            )
            .catch((err) => res.status(400).send("Error:" + err));
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// @route POST /userlogins/login
// @desc Login in for existing user
router.post("/login", (req, res) => {
  let { email, password } = req.body;
  try {
    User.findOne({ email }).then((user) => {
      if (!user) {
        return res
          .status(400)
          .send("User with email: " + req.body.email + " not found");
      }
      bcrypt.compare(password, user._doc.password).then((matched) => {
        if (matched) {
          const payload = {
            id: user.id,
            name: user.name,
          };
          jwt.sign(
            payload,
            keys.jwtSecretKey,
            {
              expiresIn: "365d",
            },
            (err, token) => {
              if (token) {
                res.status(200).json({
                  ...user._doc,
                  msg: "User successfully logged in",
                  token,
                });
              } else {
                res.status(400).json(err);
              }
            }
          );
        } else {
          return res.status(400).send("Incorrect password");
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
});

// @route POST /userlogins/verify
// @desc Verifies whether the user is logged in
router.post("/verify", async (req, res) => {
  const token = req.body.headers["cartchat-auth-token"];
  if (!token) {
    return res.status(400).json({ res: false, msg: "Invalid token" });
  }
  try {
    jwt.verify(token, keys.jwtSecretKey);
    return res.status(200).json({ res: true, msg: "Valid token" });
  } catch (e) {
    return res.status(400).json({ res: false, msg: e });
  }
});

module.exports = router;
