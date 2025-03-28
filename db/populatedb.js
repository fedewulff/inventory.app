const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS actors (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  actor_name VARCHAR ( 120 ),
  actor_age INTEGER,
  actor_oscars INTEGER
);

CREATE TABLE IF NOT EXISTS movies (
  movie_name VARCHAR ( 120 ),
  movie_year_of_release INTEGER,
  leading_role VARCHAR ( 120 ),
  actor_id INTEGER
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
