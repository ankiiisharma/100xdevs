const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://testdb_owner:pgOolCH01GdB@ep-withered-resonance-a5iy78qu.us-east-2.aws.neon.tech/testdb?sslmode=require",
});

// async function createUsersTable() {
//   await client.connect();
//   const result = await client.query(`
//         CREATE TABLE user2(
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(25)  UNIQUE NOT NULL,
//             password VARCHAR(25) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//   console.log(result);
// }

// createUsersTable();

async function insertData() {
  try {
    await client.connect();
    const insertQuery = `INSERT INTO user1(username,email,password) VALUES('ankit','ankit@example.com','passwordofankit')`;
    const res = await client.query(insertQuery);
    console.log("res done: ", res);
  } catch (err) {
    console.error("error during insertinon! :", err);
  } finally {
    await client.end();
  }
}

insertData();
