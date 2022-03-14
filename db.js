const config = require('config');
// const promise = require('bluebird');

// const initOptions = {
//   promiseLib: promise, // overriding the default (ES6 Promise);
//   // eslint-disable-next-line no-unused-vars
//   error(error, e) {
//     // eslint-disable-next-line no-param-reassign
//     error.DB_ERROR = true;
//   },
// };

// const pgp = require('pg-promise')(initOptions);

// // const db = pgp({ connectionString: config.get('DB_CONNECTION_STRING'), ssl: { rejectUnauthorized: false } });
// const db = pgp({ connectionString: config.get('DB_CONNECTION_STRING') });

const mysql = require('mysql')

const connection = mysql.createConnection({
  host: config.get('DB_HOST'),
  user: config.get('DB_USER'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_DATABASE'),
});

// Connect to the server
connection.connect((err) => {
  if (err) {
    // Return error if present
    console.log("Error occurred", err);
  } else {
    // Create database
    console.log("Connected to MySQL Server");
  }
});

module.exports = connection;
