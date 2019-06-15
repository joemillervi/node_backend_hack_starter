
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE users(
      username VARCHAR (50) UNIQUE NOT NULL,
      password VARCHAR (512) NOT NULL,
      email VARCHAR (512) UNIQUE NOT NULL,
      created_on TIMESTAMP NOT NULL,
      last_login TIMESTAMP
    );
  `)
};

exports.down = function(knex, Promise) {
  return knex.raw(`
    DROP TABLE users;
  `)
};
