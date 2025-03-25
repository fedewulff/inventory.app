const express = require("express");
const app = express();
require("dotenv").config();
const homeRouter = require("./routes/home");
const actorRouter = require("./routes/actor");
const movieRouter = require("./routes/movie");

app.set("view engine", "ejs");

app.use("/", homeRouter);
app.use("/actor", actorRouter);
app.use("/movie", movieRouter);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
