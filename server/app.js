require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/postgres');
const calculateReservations = require('./calculateReservations');
const cors = require('cors');
const compression = require('compression');
const app = express();

app.use(compression())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/:restaurantId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/bookings/restaurantName/:restaurantId', (req, res) => {
  const restaurantId = req.query.restaurantId;
  db.getRestaurantName(restaurantId, (err, data) => {
    if (err) {
      res.status(400).send('could not get restaurant name');
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/bookings/:restaurantId', (req, res) => {
  const reservation = req.body;
  // console.log(reservation)
  reservation.restaurantId = req.params.restaurantId;
  db.addReservation(reservation, (err) => {
    if (err) {
      res.status(400).send('could not reserve');
    } else {
      res.status(201).send('reservation made');
    }
  });
});

app.get('/api/bookings/:restaurantId', (req, res) => {
  const reservation = req.query;
  reservation.restaurantId = req.params.restaurantId;
  // console.log(reservation)
  db.getReservations(reservation, (err, result) => {
    if (err) {
      res.status(400).send('error finding reservations');
    } else {
      res.status(200).send(result);
    }
  });
});

app.put('/api/updateBooking/:bookingId', (req, res) => {
  const reservation = req.query;
  reservation.restaurantId = req.params.restaurantId;
  db.updateReservation(reservation, (err,) => {

  })
})

app.delete(' /api/deleteBooking/:bookingId')
module.exports = app;