const rds = require('./../config/private/rds')
const localDb = require('./../config/localDb')

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: localDb.DB_NAME,
      user: localDb.USERNAME,
      password: localDb.PASSWORD,
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: rds.HOST_NAME,
      port: rds.PORT,
      user: rds.USERNAME,
      password: rds.PASSWORD,
      database: rds.DB_NAME,
    }
  }
}
