const db = require("../db/queries");

async function getProfileData(req, res) {
  const allProfiles = await db.getAllData();

  if (allProfiles[req.params.id - 1].id) {
    const profile = allProfiles[req.params.id - 1];
    res.render("profileData", { profile: profile });
  }
}

async function getDeleteMessage(req, res) {
  res.render("deleteProfile");
}

async function deleteProfile(req, res) {
  console.log(123);
  const id = req.params.id;
  console.log(typeof id);
  // await db.deleteProfile(id);
}

module.exports = {
  getProfileData,
  getDeleteMessage,
  deleteProfile,
};
