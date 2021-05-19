require("dotenv").config();
const express = require("express");
const cors = require("cors");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const mongoose = require("mongoose");

const Users = require("./models/Users");
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use((req, res, next) => {
  const { method, url } = req;
  console.log(`${method} ${url}`);
  next();
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    res.json({ error: "Please create a username and password!" });
  } else {
    Users.find({ username: username })
      .then((user) => {
        const passwordEnteredByUser = password;
        const hash = user[0].password;
        bcrypt.compare(passwordEnteredByUser, hash, function (err, isMatch) {
          if (err) {
            throw err;
          } else if (!isMatch) {
            return response.json({
              success: false,
              message: "passwords do not match",
            });
          } else {
            res.status(200).json({
              login: true,
              success: true,
              message: "passwords match",
            });
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

app.post("/login/register", (req, res) => {
  const { username, password, bio, name, picture } = req.body;
  Users.find({ username: username })
    .exec()
    .then((user) => {
      if (user.length !== 0) {
        res.json({
          error: "User already exists! Please choose another name",
          user: user,
        });
      } else {
        if (!username || !password) {
          res.status(400);
          res.json({ error: "Please create a username and password!" });
        } else {
          bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) {
              return res.json({
                error: err,
              });
            } else {
              const user = new Users({
                _id: new mongoose.Types.ObjectId(),
                username: username,
                password: hash,
                bio: bio,
                name: name,
                picture: picture,
              });
              user
                .save()
                .then((result) => {
                  res.status(200).json({
                    newUserCreated: true,
                    message: "user created!",
                    user: result,
                  });
                })

                .catch((error) => {
                  console.error(error);
                });
            }
          });
        }
      }
    });
});

app.patch("/users", (req, res) => {
  const { bio, name, picture, username } = req.body;
  const query = { username: username };
  if (!name || !bio || !picture) {
    res.status(400);
    res.json({ error: "Please create a profile!" });
  } else {
    Users.findOneAndUpdate((query, { name: name, bio: bio, picture: picture }))
      .then((user) => {
        mongoose.set("useFindAndModify", false);
        console.log(user);
        res.status(200).json({ profileUpdated: true });
      })
      .catch((error) => {
        res.status(400);
        res.json({ error: "Something went wrong" });
        console.error(error);
      });
  }
});

const { PORT, MONGO_URL } = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongodb = mongoose.connection;

mongodb.on("open", () => {
  app.listen(PORT, () => {
    `Listening on port ${PORT}`;
  });
});
