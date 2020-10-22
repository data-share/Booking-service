const fs = require('fs');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvRestaurants = createCsvWriter({
  path: 'restaurants.csv',
  header: [
    { id: 'restaurantId', title: 'restaurantId' },
    { id: 'name', title: 'restaurantName' },
    { id: 'capacity', title: 'capacity' },
    { id: 'openHrs', title: 'openHrs' },
    { id: 'closingHrs', title: 'closedHrs' },
  ],
  append: true
});

const csvUsers = createCsvWriter({
  path: 'users.csv',
  header: [
    { id: 'userId', title: 'userId' },
    { id: 'firstName', title: 'firstName' },
    { id: 'lastName', title: 'lastName' },
    { id: 'phoneNumber', title: 'phoneNumber' },
    { id: 'email', title: 'email' },
  ],
  append: true
});

const csvBookings = createCsvWriter({
  path: 'bookings.csv',
  header: [
    { id: 'bookingId', title: 'bookingId' },
    { id: 'date', title: 'date' },
    { id: 'userId', title: 'userId' },
    { id: 'restaurantId', title: 'restaurantId' },
    { id: 'partySize', title: 'partySize' },
    { id: 'occasion', title: 'occasion' },
    { id: 'specialRequest', title: 'specialRequest' },
  ],
  append: true
});

const restaurant = (index) => {
  const id = index;
  const name = faker.lorem.word();
  const capacity = faker.random.number({ 'min': 25, 'max': 250 });
  const open = faker.random.number({ 'min': 5, 'max': 11 });
  const openHrs = `${open}:00 A.M`;
  const close = faker.random.number({ 'min': 9, 'max': 11 });
  const closingHrs = `${close}:00 P.M.`;

  return { restaurantId: id, name: name, capacity: capacity, openHrs: openHrs, closingHrs: closingHrs };
};




const userDb = (index) => {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let phone = faker.phone.phoneNumber();
  let email = faker.internet.email();
  return { userId: index, firstName: firstName, lastName: lastName, phoneNumber: phone, email: email };
};

const min = ['00', '15', '30', '45'];
const listOfOccasions = ['Birthday', 'Anniversary', 'Date Night', 'Business Meal', 'Celebration', 'None'];

const bookings = (index) => {
  let date = new Date();
  date.setDate(date.getDate() + (Math.floor(Math.random() * 30)));
  let reservation = `${date.getMonth() + 1}/${date.getDay() + 1}/${date.getFullYear()}/${faker.random.number({ 'min': 8, 'max': 23 })}:${min[Math.floor(Math.random() * 4)
  ]}`;

  let userId = faker.random.number({ 'min': 1, 'max': 10000000 });
  let restaurantId = faker.random.number({ 'min': 1, 'max': 10000000 });
  let partySize = faker.random.number({ 'min': 2, 'max': 10 });
  let occasion = listOfOccasions[faker.random.number({ 'min': 0, 'max': 5 })];
  let specialRequest = 'None';

  return { bookingId: index, date: `${reservation}`, userId: `${userId}`, restaurantId: `${restaurantId}`, partySize: `${partySize}`, occasion: `${occasion}`, specialRequest: `${specialRequest}` };
};

let record = [];
const bookingHeader = ['bookingId', 'date', 'userId', 'restaurantId', 'partySize', 'occasion', 'specialRequest'];


var writeRestaurant = function (arr, index) {
  let temp = arr.slice();

  csvRestaurants.writeRecords(temp).then(() => {
    console.log('completed writing' + index + ' to file');
  }).catch((err) => {
    console.log(err);
  });

};

// for (let i = 1; i <= 10000000; i += 1) {
//   record.push(restaurant(i));
//   if (i % 10000 === 0) {
//     console.log('restaurant record ' + i + 'completed');
//     writeRestaurant(record, i);
//     record = [];
//   }
// }

//users



const writeUsers = (arr, index) => {
  let temp = arr.slice();
  csvUsers.writeRecords(arr, { append: true }).then(() => {
    console.log('completed writing ' + index + ' to file');
    arr = [];
  });
};

// for (let i = 1; i <= 10000000; i += 1) {
//   record.push(userDb(i));
//   if (i % 10000 === 0) {
//     console.log('user record ' + i + ' written');
//     writeUsers(record, i);
//     record = [];
//   }
// }

var writeBooking = function (arr, index) {
  let temp = arr.slice();

  csvBookings.writeRecords(temp).then(() => {
    console.log('completed writing ' + index + ' to file');
  }).catch((err) => { console.log(err); });
};
// for (let i = 1; i <= 15000000; i += 1) {
//   record.push(bookings(i));
//   if (i % 10000 === 0) {
//     console.log('booking record ' + i + ' written');
//     writeBooking(record, i);
//     record = [];
//   }
// }
// for (let i = 15000001; i <= 30000000; i += 1) {
//   record.push(bookings(i));
//   if (i % 10000 === 0) {
//     console.log('booking record ' + i + ' written');
//     writeBooking(record, i);
//     record = [];
//   }
// }
// for (let i = 30000001; i <= 45000000; i += 1) {
//   record.push(bookings(i));
//   if (i % 10000 === 0) {
//     console.log('booking record ' + i + ' written');
//     writeBooking(record, i);
//     record = [];
//   }
// }
for (let i = 45000001; i <= 60000000; i += 1) {
  record.push(bookings(i));
  if (i % 10000 === 0) {
    console.log('booking record ' + i + ' written');
    writeBooking(record, i);
    record = [];
  }
}