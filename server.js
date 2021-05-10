require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const Park = require("./models/Park");
const Friends = require("./models/Friends");
const Users = require("./models/Users");
const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  const { method, url } = req;
  console.log(`${method} ${url}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello again World");
});

app.get("/parks", (req, res) => {
  Park.find()
    .then((parks) => {
      if (parks) {
        res.status(200);
        res.json(parks);
      } else {
        res.json({ error: `No parks yet!` });
      }
    })
    .catch((error) => {
      res.status(404);
      res.json({ error: `404: Not Found. ${error}` });
      console.log("error");
    });
});

app.get("/friends", (req, res) => {
  Friends.find()
    .then((friends) => {
      if (friends) {
        res.status(200);
        res.json(friends);
      } else {
        res.json({ error: `No friends yet!` });
      }
    })
    .catch((error) => {
      res.status(404);
      res.json({ error: `404: Not Found. ${error}` });
      console.log("error");
    });
});

app.get("/users", (req, res) => {
  Users.find()
    .then((users) => {
      if (users) {
        res.status(200);
        res.json(users);
      } else {
        res.json({ error: `No users yet!` });
      }
    })
    .catch((error) => {
      res.status(404);
      res.json({ error: `404: Not Found. ${error}` });
      console.log("error");
    });
});

app.post("/users", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    res.json({ error: "Please create a username and password!" });
  } else {
    Users.create({ username: username, password: password })
      .then((user) => {
        console.log(user);
        res.json(user);
        res.status(201);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

app.get("/parks/:id", (req, res) => {
  const { id } = req.params;

  Park.findById(id)
    .then((park) => {
      if (park) {
        res.status(200);
        res.json(park);
        console.log(`found: ${park}`);
      } else {
        res.json({ error: `No parks found!` });
        console.log(`cannot find: ${park}`);
      }
    })
    .catch((error) => {
      res.status(404);
      res.json({ error: `404: Not Found. ${error}` });
      console.log("error");
    });
});

const { PORT, MONGO_URL } = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongodb = mongoose.connection;

mongodb.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
