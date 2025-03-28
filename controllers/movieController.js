const db = require("../db/queries");

async function moviePage(req, res) {
  const movieData = await db.getMovieData();
  const actorName = await db.getActorName();
  res.render("movies", { movieData: movieData, actorName: actorName });
}

async function moviePagePost(req, res) {
  const { movieName } = req.body;
  const { movieReleaseYear } = req.body;
  const { movieActor } = req.body;
  const actorName = await db.getActorName();
  let actorId;
  for (let i = 0; i < actorName.length; i++) {
    if (actorName[i].actor_name === movieActor) {
      actorId = actorName[i].id;
    }
  }
  await db.postMovieData(movieName, movieReleaseYear, movieActor, actorId);
  res.redirect("/movies");
}

module.exports = {
  moviePage,
  moviePagePost,
};
