const db = require("../db/queries");

async function getProfileData(req, res) {
  const allProfiles = await db.getAllData();

  if (allProfiles[req.params.id - 1].id) {
    const profile = allProfiles[req.params.id - 1];
    res.render("profileData", { profile: profile });
  }
}

// async function getDeleteMessage(req, res) {
//   console.log(`get: ${req.params.id}`);
//   res.end();
// }

// async function deleteProfile(req, res) {
//   console.log(`delete: ${req.params.id}`);
// }

module.exports = {
  getProfileData,
};
