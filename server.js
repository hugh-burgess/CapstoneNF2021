require("dotenv").config();
const express = require("express");
const db = require("./client/src/lib/db.json");
const cors = require("cors");
const mongoose = require("mongoose");
const Park = require("./client/src/models/Park");
const app = express();

app.use(cors());
app.use(express.json());

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
      res.json({ error: `404: Not Found.` });
    });
});

const { PORT, MONGO_URL } = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongodb.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
