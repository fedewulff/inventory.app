const express = require("express");
const app = express();
require("dotenv").config();
const homeRouter = require("./routes/homeRouter");
const actorRouter = require("./routes/actorRouter");
const movieRouter = require("./routes/movieRouter");
const profileRouter = require("./routes/profileRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/actors", actorRouter);
app.use("/movies", movieRouter);
app.use("/profile", profileRouter);

const { argv } = require("node:process");

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
