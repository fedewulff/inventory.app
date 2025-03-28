const db = require("../db/queries");

async function actorPage(req, res) {
  const actorData = await db.getActorData();
  console.log(actorData);
  res.render("actors", { actorData: actorData });
}

async function actorPagePost(req, res) {
  console.log(req.body);
  const { actorName } = req.body;
  const { actorAge } = req.body;
  const { actorOscars } = req.body;
  await db.postActorData(actorName, actorAge, actorOscars);
  res.redirect("/actors");
}

module.exports = {
  actorPage,
  actorPagePost,
};
