# ArangoDB Queries
#### Times with 60M records in database


#### Create New Booking
##### INSERT {"_key": "60000001", "bookingId": 60000001, "data": "11/12/2020/13:30", "restaurantId": 123122, "partySize": 5, "occasion": "None", "specialRequest": "None"} INTO bookings
```
Time: 23.832 ms (1 writes0 writes ignored)
```
#### Query Booking

##### Query 1 element 60M records Time 17.170 ms
```javascript
RETURN document('bookings/15258522')
```
```json
[
  {
    "_key": "15258522",
    "_id": "bookings/15258522",
    "_rev": "_bSz_N6e--H",
    "bookingId": 15258522,
    "date": "11/5/2020/20:00",
    "userId": 2907686,
    "restaurantId": 9983482,
    "partySize": 10,
    "occasion": "Anniversary",
    "specialRequest": "None"
  }
]
```
#### Query All Bookings for restaurantId

##### Query 5 elements 60M records Time 53.448 ms
``` javascript
FOR booking IN bookings
    FILTER booking.restaurantId == 1131242
    RETURN booking
```
```json
[
  {
    "_key": "5157674",
    "_id": "bookings/5157674",
    "_rev": "_bSy8A0e-_e",
    "bookingId": 5157674,
    "date": "11/3/2020/21:45",
    "userId": 8784220,
    "restaurantId": 1131242,
    "partySize": 7,
    "occasion": "Anniversary",
    "specialRequest": "None"
  },
  {
    "_key": "24044960",
    "_id": "bookings/24044960",
    "_rev": "_bSzCIRK--E",
    "bookingId": 24044960,
    "date": "11/2/2020/15:30",
    "userId": 9172784,
    "restaurantId": 1131242,
    "partySize": 5,
    "occasion": "None",
    "specialRequest": "None"
  },
  {
    "_key": "25808493",
    "_id": "bookings/25808493",
    "_rev": "_bSzCvmO-Aq",
    "bookingId": 25808493,
    "date": "11/2/2020/13:45",
    "userId": 4876502,
    "restaurantId": 1131242,
    "partySize": 2,
    "occasion": "Birthday",
    "specialRequest": "None"
  },
  {
    "_key": "25808531",
    "_id": "bookings/25808531",
    "_rev": "_bSzCvmW--t",
    "bookingId": 25808531,
    "date": "11/2/2020/10:30",
    "userId": 3846193,
    "restaurantId": 1131242,
    "partySize": 4,
    "occasion": "None",
    "specialRequest": "None"
  },
  {
    "_key": "34971754",
    "_id": "bookings/34971754",
    "_rev": "_bSzGU3---a",
    "bookingId": 34971754,
    "date": "10/5/2020/23:15",
    "userId": 7450605,
    "restaurantId": 1131242,
    "partySize": 4,
    "occasion": "Birthday",
    "specialRequest": "None"
  },
  {
    "_key": "36699815",
    "_id": "bookings/36699815",
    "_rev": "_bSzG87u-BV",
    "bookingId": 36699815,
    "date": "10/6/2020/15:15",
    "userId": 5105170,
    "restaurantId": 1131242,
    "partySize": 6,
    "occasion": "None",
    "specialRequest": "None"
  }
]
```
#### Delete Booking
##### remove {"_key": "60000001"} in bookings
```
Time: 0.871 ms (1 writes0 writes ignored)
```