// const { Client } = require("pg");

// const client = new Client({
//   connectionString:
//     "postgresql://testdb_owner:pgOolCH01GdB@ep-withered-resonance-a5iy78qu.us-east-2.aws.neon.tech/testdb?sslmode=require",
// });

// // async function createUsersTable() {
// //   await client.connect();
// //   const result = await client.query(`
// //         CREATE TABLE user2(
// //             id SERIAL PRIMARY KEY,
// //             username VARCHAR(50) UNIQUE NOT NULL,
// //             email VARCHAR(25)  UNIQUE NOT NULL,
// //             password VARCHAR(25) NOT NULL,
// //             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// //         );
// //     `);
// //   console.log(result);
// // }

// // createUsersTable();

// // async function insertData() {
// //   try {
// //     await client.connect();
// //     const insertQuery = `INSERT INTO user1(username,email,password) VALUES('ankit','ankit@example.com','passwordofankit')`;
// //     const res = await client.query(insertQuery);
// //     console.log("res done: ", res);
// //   } catch (err) {
// //     console.error("error during insertinon! :", err);
// //   } finally {
// //     await client.end();
// //   }
// // }

// // insertData();

// async function getUser(email) {
//   await client.connect();
//   const query = `SELECT city, country, street, pincode
//   FROM addresses
//   WHERE user_id = 1;`;
//   const result = await client.query(query, [email]);

//   if (result.rows.length > 0) {
//     console.log("user found!", result.rows[0]);
//     return result.rows[0];
//   } else {
//     console.log("user not found!");
//     return null;
//   }
// }

// getUser("ankit@example.com").catch(console.error);

const { Client } = require("pg");

const connectionString =
  "postgresql://testdb_owner:pgOolCH01GdB@ep-withered-resonance-a5iy78qu.us-east-2.aws.neon.tech/testdb?sslmode=require";

async function createUsersTable() {
  const client = new Client({
    connectionString,
  });
  try {
    await client.connect();
    const result = await client.query(`
      CREATE TABLE IF NOT EXISTS users5 (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users5(id) ON DELETE CASCADE
      );
    `);
    console.log("Tables created:", result);
  } catch (err) {
    console.error("Error creating tables:", err);
  } finally {
    await client.end();
  }
}

async function insertData() {
  const client = new Client({
    connectionString,
  });
  try {
    await client.connect();
    const insertUserQuery = `
      INSERT INTO users5 (username, email, password) 
      VALUES ('ankit', 'ankit@example.com', 'passwordofankit') 
      RETURNING id;
    `;
    const userResult = await client.query(insertUserQuery);
    const userId = userResult.rows[0].id;

    const insertAddressQuery = `
      INSERT INTO addresses (user_id, city, country, street, pincode) 
      VALUES ($1, 'New York', 'USA', '123 Broadway St', '10001');
    `;
    const addressResult = await client.query(insertAddressQuery, [userId]);
    console.log("Data inserted:", addressResult);
  } catch (err) {
    console.error("Error during insertion:", err);
  } finally {
    await client.end();
  }
}

async function getUser(email) {
  const client = new Client({
    connectionString,
  });
  try {
    await client.connect();
    const query = `
      SELECT city, country, street, pincode
      FROM addresses
      JOIN users5 ON users5.id = addresses.user_id
      WHERE users5.email = $1;
    `;
    const result = await client.query(query, [email]);

    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("User not found!");
      return null;
    }
  } catch (err) {
    console.error("Error fetching user:", err);
  } finally {
    await client.end();
  }
}

createUsersTable();
insertData();
getUser("ankit@example.com").catch(console.error);
