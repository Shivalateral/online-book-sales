const pool = require('../../dbConnection');

exports.getCustomerById = (customerId) => {
  return pool.query('SELECT * FROM customers WHERE id = ?', [customerId]);
};
