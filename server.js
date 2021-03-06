require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

const Users = require("./models/Users");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  const { method, url } = req;
  console.log(`${method} ${url}`);
  next();
});

app.get("/api/hello-world", (req, res) => {
  res.status(200).json("Hello World");
});

app.post("/api/login", (req, res) => {
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

app.post("/api/login/register", (req, res) => {
  const { username, password } = req.body;
  Users.find({ username: username })
    .exec()
    .then((users) => {
      if (users.length !== 0) {
        res.json({
          error: "User already exists! Please choose another name",
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
              const owner = new Users({
                username: username,
                password: hash,
                name: "",
                bio: "",
                picture: "",
                imageType: "",
                info: "",
              });
              owner
                .save()
                .then((result) => {
                  res.status(200).json({
                    newUserCreated: true,
                    message: "user created!",
                    owner: result,
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

app.patch("/api/users", (req, res) => {
  const { bio, name, picture, username, info, imageType } = req.body;
  const query = { username: username };
  if (!name || !bio || !picture) {
    res.status(400);
    res.json({ error: "Please create a profile!" });
  } else {
    Users.findOneAndUpdate(
      query,
      {
        username: username,
        name: name,
        bio: bio,
        picture: picture,
        info: info,
        imageType: imageType,
      },
      { new: true, upsert: true }
    )

      .then((user) => {
        console.log(`the new profile for user is: ${user}`);
        res.status(200).json({ profileUpdated: true });
      })
      .catch((error) => {
        res.status(400);
        res.json({ error: "Something went wrong" });
        console.error(error);
      });
  }
});

if (process.env.NODE_ENV === "production") {
  // Serve any static file
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

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
