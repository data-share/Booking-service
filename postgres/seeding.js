const fs = require('fs');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvRestaurants = createCsvWriter({
  path: 'restaurants.csv',
  header: [
    { id: 'key', title: '' },
    { id: 'name', title: '' },
    { id: 'capacity', title: '' },
    { id: 'openHrs', title: '' },
    { id: 'closingHrs', title: '' },
  ]
});

const csvUsers = createCsvWriter({
  path: 'users.csv',
  header: [
    { id: 'userId', title: '' },
    { id: 'firstName', title: '' },
    { id: 'lastName', title: '' },
    { id: 'phoneNumber', title: '' },
    { id: 'email', title: '' },
  ],
  append: true
})

const csvBookings = createCsvWriter({
  path: 'bookings.csv',
  header: [
    { id: 'bookingId', title: '' },
    { id: 'date', title: '' },
    { id: 'userId', title: '' },
    { id: 'restaurantId', title: '' },
    { id: 'partySize', title: '' },
    { id: 'occasion', title: '' },
    { id: 'specialRequest', title: '' },
  ],
  append: true
})

const restaurant = (index) => {
  const id = index;
  const name = faker.lorem.word();
  const capacity = faker.random.number({ 'min': 25, 'max': 250 });
  const open = faker.random.number({ 'min': 5, 'max': 11 });
  const openHrs = `${open}:00 A.M`;
  const close = faker.random.number({ 'min': 9, 'max': 11 })
  const closingHrs = `${close}:00 P.M.`;

  return { key: id, name: name, capacity: capacity, openHrs: openHrs, closingHrs: closingHrs }
}




const userDb = (index) => {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let phone = faker.phone.phoneNumber();
  let email = faker.internet.email();
  return { userId: index, firstName: firstName, lastName: lastName, phoneNumber: phone, email: email }
}


const bookings = (index) => {
  let date = faker.date.soon();
  let userId = faker.random.number({ 'min': 1, 'max': 10000000 });
  let restaurantId = faker.random.number({ 'min': 1, 'max': 10000000 });
  let partySize = faker.random.number({ 'min': 2, 'max': 10 });
  let occasion = faker.lorem.word();
  let specialRequest = faker.lorem.word();

  return { bookingId: index, date: date, userId: userId, restaurantId: restaurantId, partySize: partySize, occasion: occasion, specialRequest: specialRequest }
}



let record = []
// for (let i = 1; i <= 10000000; i += 1) {
//   record.push(restaurant(i))
//   if (i % 10000 === 0) {
//     console.log('restaurant record ' + i + 'completed')
//   }
// }
// csvRestaurants.writeRecords(record).then(() => {
//   console.log('completed');
//   record = [];
//   //users

// });
// const writeUsers = (arr, index) => {
//   csvUsers.writeRecords(arr, { append: true }).then(() => {
//     console.log('completed writing' + index + ' to file');
//     record = [];
//     //bookings
//   })
// }
// console.log('starting user csv generation')
// for (let i = 9000000; i <= 10000000; i += 1) {
//   record.push(userDb(i));
//   if (i % 10000 === 0) {
//     console.log('user record ' + i + ' written');

//   }
// }

// csvUsers.writeRecords(record).then(() => {
//   console.log('completed writing to file');
//   //bookings
// })

for (let i = 9000000; i <= 10000000; i += 1) {
  record.push(bookings(i));
  if (i % 10000 === 0) {
    console.log('booking record ' + i + ' written');

  }
}
csvBookings.writeRecords(record).then(() => {
  console.log('completed ');
})