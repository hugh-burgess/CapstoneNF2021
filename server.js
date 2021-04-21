require("dotenv").config();
const express = require("express");
const db = require("./client/src/lib/db");
const cors = require("cors");

const mongoose = require("mongoose");
const Park = require("./client/src/models/Park");
const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  const { method, url } = req;
  console.log(`${method} ${url}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
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
