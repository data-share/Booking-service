
## postgres
###  selection from bookings getting bookings for a restaurant from 60M records and joining restaurant information

##### select * from bookings inner join restaurants on (bookings.restaurantId = restaurants.restaurantId) where bookings.restaurantId = 2986221
```sh
datashare=# select * from bookings inner join restaurants on (bookings.restaurantId = restaurants.restaurantId) where bookings.restaurantId = 2986221;
 bookingid |      date       | userid  | restaurantid | partysize |   occasion    | specialrequest | restaurantid | restaurantname | capacity |  openhrs  | closinghrs
-----------+-----------------+---------+--------------+-----------+---------------+----------------+--------------+----------------+----------+-----------+------------
   4137389 | 11/2/2020/13:30 | 6829140 |      2986221 |         2 | Celebration   | None           |      2986221 | eaque          |       31 | 11:00 A.M | 11:00 P.M.
  13194334 | 11/4/2020/10:15 | 2008146 |      2986221 |         3 | Celebration   | None           |      2986221 | eaque          |       31 | 11:00 A.M | 11:00 P.M.
  19916544 | 11/5/2020/21:30 | 2331862 |      2986221 |         7 | None          | None           |      2986221 | eaque          |       31 | 11:00 A.M | 11:00 P.M.
  22598902 | 10/7/2020/22:00 | 1957733 |      2986221 |         9 | Business Meal | None           |      2986221 | eaque          |       31 | 11:00 A.M | 11:00 P.M.
  31236118 | 10/7/2020/13:30 | 7301536 |      2986221 |         3 | Business Meal | None           |      2986221 | eaque          |       31 | 11:00 A.M | 11:00 P.M.
  34620057 | 11/6/2020/17:15 | 7545990 |      2986221 |         2 | Anniversary   | None           |      2986221 | eaque          |       31 | 11:00 A.M | 11:00 P.M.
  59011400 | 10/6/2020/12:30 | 9442383 |      2986221 |         2 | None          | None           |      2986221 | eaque          |       31 | 11:00 A.M | 11:00 P.M.
  59530160 | 11/1/2020/15:15 | 4142913 |      2986221 |         8 | Date Night    | None           |      2986221 | eaque          |       31 | 11:00 A.M | 11:00 P.M.
(8 rows)

Time: 12.198 ms
```


## postgres
###  selection from bookings getting bookings for a restaurant from 60M records

##### select * from bookings where restaurantId = 3242312
```sh
datashare=# select * from bookings where restaurantId = 3242312;
 bookingid |      date       | userid  | restaurantid | partysize |  occasion   | specialrequest
-----------+-----------------+---------+--------------+-----------+-------------+----------------
   9519163 | 11/3/2020/23:00 | 5077167 |      3242312 |         3 | Birthday    | None
  33580485 | 10/6/2020/18:30 | 7986392 |      3242312 |         5 | Birthday    | None
  33729562 | 10/3/2020/23:15 | 9395250 |      3242312 |         6 | Date Night  | None
  44920923 | 11/1/2020/9:00  | 6504087 |      3242312 |         6 | Celebration | None
(4 rows)

Time: 6.376 ms
```



## ArangoDB web "interface"
### Query 1 elements 60M records
#### Time: 10.233 ms

``` javascript
RETURN document(‘bookings/12312321')

```

```json
[
  {
    "_key": "12312321",
    "_id": "bookings/12312321",
    "_rev": "_bSz-Rcq--M",
    "bookingId": 4308052,
    "date": "11/7/2020/22:45",
    "userId": 5833762,
    "restaurantId": 1950886,
    "partySize": 10,
    "occasion": "Birthday",
    "specialRequest": "None"
  }
]
```

## ArangoDB web "interface"
### Query 5 elements 60M records
#### Time: 29.216 ms

```javascript
FOR booking IN bookings
FILTER booking.restaurantId == 1512522
RETURN booking
```

```json
[
  {
    "_key": "4308052",
    "_id": "bookings/4308052",
    "_rev": "_bSy7xGa-_V",
    "bookingId": 4308052,
    "date": "10/7/2020/17:15",
    "userId": 9374181,
    "restaurantId": 1512522,
    "partySize": 3,
    "occasion": "None",
    "specialRequest": "None"
  },
  {
    "_key": "38306807",
    "_id": "bookings/38306807",
    "_rev": "_bSzHfcS--3",
    "bookingId": 38306807,
    "date": "11/3/2020/16:45",
    "userId": 7189607,
    "restaurantId": 1512522,
    "partySize": 9,
    "occasion": "Anniversary",
    "specialRequest": "None"
  },
  {
    "_key": "42924543",
    "_id": "bookings/42924543",
    "_rev": "_bSzJG52--w",
    "bookingId": 42924543,
    "date": "10/4/2020/22:45",
    "userId": 2365775,
    "restaurantId": 1512522,
    "partySize": 2,
    "occasion": "Date Night",
    "specialRequest": "None"
  },
  {
    "_key": "53006436",
    "_id": "bookings/53006436",
    "_rev": "_bSzMx1i--I",
    "bookingId": 53006436,
    "date": "11/7/2020/18:45",
    "userId": 7753009,
    "restaurantId": 1512522,
    "partySize": 6,
    "occasion": "Business Meal",
    "specialRequest": "None"
  },
  {
    "_key": "59093237",
    "_id": "bookings/59093237",
    "_rev": "_bSzPAl---L",
    "bookingId": 59093237,
    "date": "10/5/2020/8:00",
    "userId": 8965499,
    "restaurantId": 1512522,
    "partySize": 5,
    "occasion": "Anniversary",
    "specialRequest": "None"
  }
]
```