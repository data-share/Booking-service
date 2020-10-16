
# bookings-service
This is a feature to see available times for selected dates and number of guests

## Related Projects

  - https://github.com/data-share/popular-dishes-service
  - https://github.com/data-share/photo-gallery-service
  - https://github.com/data-share/reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).
```sh
- Node 6.13.0
- etc
```
## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```



# Service Plan for Bookings Feature
## Service Owner: Michael Stringer
GET - Search for table
The request will require two properties: the time for reservation and the party size. A successful request will have a response with a status 200 and either a list of available times within 2.5 hours of the requested time on the given date for the specific party size or an empty list indicating no available reservation times.


# Get restaurant name
The request takes no properties. It will only use the restaurant Id included in the API endpoint and respond with a the name of that specific restaurant.

### End Point : /api/bookings/restaurantName/:restaurantId
### Method: GET
### Request Data Format:
```sh
{
  date: *String
  partySize: Integer
}
```
### Response body:
```sh
{
  restaurantName: "name"
}
```
### Success response status code:
```sh
200
```
# Post - Reserve a table
The request will require four properties: time for reservation, the party size, the name of reserver and phone-number of reserver. Fifth property of occasion will be optional. A successful request will have a response with a status 201.

### End Point: /api/bookings/:restaurantId
### Method: GET
### Request Data Format:
```sh
{
  date: *String
  partySize: Integer
  name: String
  contactInfo: String
  occasion (optional): String
}
```
### Response Body: N/A
### Success response status code:
```sh
201
```
# PUT - Update Reservation:
The request will require 6 properties: reservation_id, the party size, the name of reserver, phone-number of reserver, the date of the reservation and the occasion. A successful request will respond with 204.

### End Point: /api/updateBooking/:bookingId
### Method: PUT
### Request Data Format:
```sh
{
  reservation_id: int
  party_size: int
  name: string
  date: *String
  occasion: *String
}
```
### Response Body: N/A
### Success response status code:
```sh
204
```
# DELETE - Delete Reservation:
This request will removed the reservation tied to the supplied id from the database. A successful request will respond with 204.

### End Point: /api/deleteBooking/:bookingId
### Method: DELETE
### Request Data Format:
```sh
{
  reservation_id: int
}
```
### Response Body: N/A
### Success response status code:
```sh
204
```
*Date string to be in 'December 17, 1995 03:24:00' format. Will also need to be rounded to the nearest 30 minutes to give relevant data.
