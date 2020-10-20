const Key = require('../env.json').ArangoDB_KEY;
const { Database } = require('arangojs');




//connection to db
const db = new Database({
  url: 'http://127.0.0.1:8529',
  auth: {
    username: 'root',
    password: Key
  }
});

let databaseFound = false;
//checking if db is created
db.listDatabases().then((names) => {
  if (names.includes('sdcBookings')) {
    // db.dropDatabase('sdcBookings');
    db.useDatabase('sdcBookings');
    databaseFound = true;
  }
}).then(() => {
  if (!databaseFound) {

    //create database
    db.createDatabase('sdcBookings', (err) => {
      if (!err) {
        console.log('Database Created');
      } else {
        console.error(err);
      }
    }).then(() => {
      //use database
      db.useDatabase('sdcBookings');

      //tables

      //bookings collection
      const bookingSchema = {
        rule: {
          'type': 'object',
          'properties': {
            'bookingId': { 'type': 'number' },
            'date': { 'type': 'string' },
            'userId': { 'type': 'number' },
            'restaurantId': { 'type': 'number' },
            'partySize': { 'type': 'number' },
            'occasion': { 'type': 'string' },
            'specialRequest': { 'type': 'string' }
          }
        },
        'message': "Booking Schema Validation Failed."
      }
      const bookings = db.createCollection('bookings', { 'schema': bookingSchema })
        .then(
          () => {
            console.log('bookings collection created');
          },
          (err) => {
            console.error(err);
          }
        )

      //restaurants collection
      const restaurantSchema = {
        rule: {
          'type': 'object',
          'properties': {
            'restaurantId': { 'type': 'number' },
            'name': { 'type': 'string' },
            'capacity': { 'type': 'number' },
            'openHrs': { 'type': 'object' },
            'closedHrs': { 'type': 'object' }
          }
        },
        'message': "Restaurant Schema Validation Failed."
      }
      const restaurants = db.createCollection('restaurants', { 'schema': restaurantSchema })
        .then(
          () => {
            console.log('restaurants collection created');
          },
          (err) => {
            console.error(err);
          }
        )

      //users collection

      const userSchema = {
        rule: {
          'type': 'object',
          'properties': {
            'userId': { 'type': 'number' },
            'firstName': { 'type': 'string' },
            'lastName': { 'type': 'string' },
            'phoneNumber': { 'type': 'string' },
            'email': { 'type': 'string' }
          }
        },
        'message': "User Schema Validation Failed."
      }

      const users = db.createCollection('users', { 'schema': userSchema })
        .then(
          () => {
            console.log('users collection created');
          },
          (err) => {
            console.error(err);
          }
        )
    })
  }
})



// arangoimport --file "data.csv" --type csv --collection "users"
