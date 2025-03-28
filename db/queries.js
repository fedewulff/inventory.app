const pool = require("./pool");

async function getAllData() {
  const { rows } = await pool.query(
    "SELECT * FROM actors LEFT JOIN movies ON actors.id = movies.actor_id"
  );
  return rows;
}
async function getActorData() {
  const { rows } = await pool.query("SELECT * FROM actors");
  return rows;
}
async function postActorData(person, age, oscars) {
  await pool.query("INSERT INTO actors (actor_name,actor_age,actor_oscars) VALUES ($1,$2,$3)", [
    person,
    age,
    oscars,
  ]);
}
async function getActorName() {
  const { rows } = await pool.query("SELECT id,actor_name FROM actors");
  return rows;
}
async function getMovieData() {
  const { rows } = await pool.query("SELECT * FROM movies");
  return rows;
}
async function postMovieData(movie, year, leadingRole, actorId) {
  await pool.query(
    "INSERT INTO movies (movie_name,movie_year_of_release,leading_role,actor_id) VALUES ($1,$2,$3,$4)",
    [movie, year, leadingRole, actorId]
  );
}

async function deleteProfile(id) {
  await pool.query(
    "DELETE FROM actors JOIN movie ON actors.id = movies.actor_id WHERE actors.id = ($1)",
    [id]
  );
}

module.exports = {
  getAllData,
  getActorData,
  postActorData,
  getActorName,
  getMovieData,
  postMovieData,
  deleteProfile,
};
