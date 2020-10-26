const { Pool } = require('pg');
const connection = require('../env.json').Postgres;
const pool = new Pool(connection);


pool.connect();

const getReservations = (restaurantId, callback) => {
  pool.query('SELECT * FROM bookings WHERE restaurantId = $1', [restaurantId.restaurantId], (err, res) => {
    if (err) {
      callback(err.stack);
    } else {
      callback(null, res.rows);
    }
  });
};

const getRestaurantName = (restaurantId, callback) => {
  pool.query('SELECT * FROM restaurants WHERE restaurantId = $1', [restaurantId], (err, res) => {
    if (err) {
      callback(err.stack);
    } else {
      callback(null, res.rows);
    }
  });
};

const addReservation = (reservation, callback) => {
  pool.query('INSERT INTO bookings $1', [reservation], (err, res) => {
    if (err) {
      callback(err.stack);
    } else {
      callback(null, res.rows);
    }
  });
};

const addRestaurant = (restaurant, callback) => {
  pool.query('INSERT INTO restaurants $1', [restaurant], (err, res) => {
    if (err) {
      callback(err.stack);
    } else {
      callback(res.rows);
    }
  });
};

module.exports = {
  getReservations,
  getRestaurantName,
  addReservation,
  addRestaurant,
};