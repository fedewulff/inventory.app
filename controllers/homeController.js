const db = require("../db/queries");

async function homePage(req, res) {
  const allData = await db.getAllData();
  res.render("home", { allData: allData });
}

module.exports = {
  homePage,
};
