const pool = require('../../dbConnection');

exports.getAllBooks = () => {
  return pool.query('SELECT * FROM books');
};
