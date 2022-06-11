const express = require("express");
const app = express();
const user = require("./router/route.js");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/ver")
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((e) => {
    console.log(e);
  });
app.use(express.json());
app.use("/api/user", user);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
