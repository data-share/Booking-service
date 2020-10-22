# Postgres Queries
#### Times with 60M records in database


#### Create New Booking
##### insert into bookings (bookingid, date, userid, restaurantid, partysize, occasion, specialrequest) values (60000001, '11/23/2020/15:30', 213124, 7277123, 5, 'None', 'None')
```sh
datashare=# insert into bookings (bookingid, date, userid, restaurantid, partysize, occasion, specialrequest) values (60000001, '11/23/2020/15:30', 213124, 7277123, 5, 'None', 'None');
INSERT 0 1
Time: 170.024 ms
```
##### insert into bookings (bookingid, date, userid, restaurantid, partysize, occasion, specialrequest) values (60000002, '10/23/2020/17:45', 13124, 72123, 10, 'Birhtday', 'None')
```sh
datashare=# insert into bookings (bookingid, date, userid, restaurantid, partysize, occasion, specialrequest) values (60000002, '10/23/2020/17:45', 13124, 72123, 10, 'Birhtday', 'None');
INSERT 0 1
Time: 30.019 ms
```
#### Query Booking

##### select * from bookings where bookingId = 59012249
```sh
datashare=#  select * from bookings where bookingId = 59012249;
 bookingid |      date       | userid  | restaurantid | partysize |  occasion  | specialrequest
-----------+-----------------+---------+--------------+-----------+------------+----------------
  59012249 | 10/7/2020/15:00 | 2328395 |       746035 |         2 | Date Night | None
(1 row)

Time: 11.513 ms
```
##### select * from bookings where bookingId = 3249
```sh
datashare=#  select * from bookings where bookingId = 3249;
 bookingid |      date       | userid  | restaurantid | partysize |  occasion   | specialrequest
-----------+-----------------+---------+--------------+-----------+-------------+----------------
      3249 | 11/5/2020/19:45 | 7630935 |      1714856 |         6 | Anniversary | None
(1 row)

Time: 15.557 ms
```
##### select * from bookings where bookingId = 3903249
```sh
datashare=#  select * from bookings where bookingId = 3903249;
 bookingid |      date       | userid  | restaurantid | partysize | occasion | specialrequest
-----------+-----------------+---------+--------------+-----------+----------+----------------
   3903249 | 11/7/2020/13:00 | 8644689 |      1077217 |         9 | Birthday | None
(1 row)

Time: 13.249 ms
```
#### Query All Bookings for restaurantId

##### select * from bookings where restaurantId = 232140
```sh
datashare=# select * from bookings where restaurantId = 232140;
 bookingid |      date       | userid  | restaurantid | partysize |  occasion   | specialrequest
-----------+-----------------+---------+--------------+-----------+-------------+----------------
  29292609 | 11/1/2020/9:00  | 8383441 |       232140 |         3 | Celebration | None
  31938500 | 10/5/2020/15:00 |  254721 |       232140 |         2 | None        | None
  32437349 | 10/5/2020/16:30 | 7759531 |       232140 |         6 | None        | None
  32323690 | 11/4/2020/16:45 | 8317916 |       232140 |         8 | Anniversary | None
  38732506 | 11/3/2020/11:45 | 6761600 |       232140 |         9 | Birthday    | None
  44086089 | 11/5/2020/17:45 | 9381394 |       232140 |         3 | Birthday    | None
  56640217 | 11/2/2020/22:45 | 4108709 |       232140 |         2 | Date Night  | None
(7 rows)
Time: 70.603 ms
```
##### select * from bookings where restaurantId = 2321402
```sh
datashare=# select * from bookings where restaurantId = 2321402;
 bookingid |      date       | userid  | restaurantid | partysize |  occasion  | specialrequest
-----------+-----------------+---------+--------------+-----------+------------+----------------
  45565886 | 10/1/2020/23:00 | 1575450 |      2321402 |         2 | Date Night | None
  46245706 | 11/1/2020/22:30 | 4511254 |      2321402 |         7 | None       | None
  50736794 | 11/3/2020/19:15 | 1550936 |      2321402 |         7 | None       | None
(3 rows)

Time: 13.895 ms
```
##### select * from bookings where restaurantId = 9321402
```sh
datashare=# select * from bookings where restaurantId = 9321402;
 bookingid |      date       | userid  | restaurantid | partysize |  occasion   | specialrequest
-----------+-----------------+---------+--------------+-----------+-------------+----------------
   3444585 | 10/5/2020/21:45 | 5065746 |      9321402 |        10 | Celebration | None
   7461796 | 11/5/2020/20:30 |  188498 |      9321402 |         9 | Celebration | None
  34914006 | 11/4/2020/12:30 | 4858007 |      9321402 |         9 | Celebration | None
  40051552 | 11/6/2020/14:30 | 2516429 |      9321402 |         6 | Date Night  | None
  46038848 | 11/2/2020/9:30  | 4142771 |      9321402 |         3 | None        | None
  47864205 | 11/2/2020/11:00 | 5234433 |      9321402 |        10 | Celebration | None
(6 rows)

Time: 34.830 ms
```
#### Delete Booking
##### delete from bookings where bookingid = 60000001
```sh
datashare=# delete from bookings where bookingid = 60000001;
DELETE 1
Time: 4.019 ms
```

##### delete from bookings where bookingid = 60000000
```sh
datashare=# delete from bookings where bookingid = 60000000;
DELETE 1
Time: 4.871 ms
```