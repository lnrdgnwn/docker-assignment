const db = require("../config/db");

exports.insertUser = async (name, email, phone, address) => {
  const result = await db.query(
    `INSERT INTO users (name, email, phone, address)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, email, phone, address]
  );

  return result.rows[0];
};