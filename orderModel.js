const pool = require('../../dbConnection');

exports.createOrder = (customerId, bookId) => {
  return pool.query('INSERT INTO orders (customer_id, book_id) VALUES (?, ?)', [customerId, bookId]);
};
