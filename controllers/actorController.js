const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const validateInputs = [
  body("actorName")
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isAlpha()
    .withMessage("Name only accepts letters")
    .isLength({ min: 2, max: 70 })
    .withMessage("Name must be between 2 and 70 characters"),
  body("actorAge")
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isInt({ min: 0, max: 150 })
    .withMessage(`Age must be between 0 and 150`),
  body("actorOscars")
    .trim()
    .notEmpty()
    .withMessage(`Oscars value cannot be empty`)
    .isInt({ min: 0, max: 99 })
    .withMessage(`Oscars value cannot be above 99`),
];

// async function actorPage(req, res) {
//   const actorData = await db.getActorData();
//   res.render("actors", { actorData: actorData });
// }

// async function actorPagePost(req, res) {
//   validateInputs,
//     async (req, res) => {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         const actorData = await db.getActorData();
//         return res.status(400).render("actors", { actorData: actorData, errors: errors.array() });
//       }
//       const { actorName, actorAge, actorOscars } = req.body;
//       await db.postActorData(actorName, actorAge, actorOscars);
//       res.redirect("actors");
//     };
// }
// module.exports = {
//   actorPage,
//   actorPagePost,
// };

exports.actorPage = async function actorPage(req, res) {
  const actorData = await db.getActorData();
  res.render("actors", { actorData: actorData });
};

exports.actorPagePost = [
  validateInputs,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const actorData = await db.getActorData();
      return res.status(400).render("actors", { actorData: actorData, errors: errors.array() });
    }
    const { actorName, actorAge, actorOscars } = req.body;
    await db.postActorData(actorName, actorAge, actorOscars);
    res.redirect("actors");
  },
];
