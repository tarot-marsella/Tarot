const { Client } = require('pg');
require('dotenv').config();

console.log("Current DATABASE_URL from .env:", process.env.DATABASE_URL);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function testConnection() {
  try {
    console.log("Attempting PG connection...");
    await client.connect();
    console.log("SUCCESSFULLY CONNECTED TO POSTGRESQL!");
    const res = await client.query('SELECT NOW()');
    console.log("Query result:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("PG CONNECTION ERROR:", err.message);
    console.error(err);
  }
}

testConnection();
