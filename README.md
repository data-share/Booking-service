
# bookings-service
This is a feature to see available times for selected dates and number of guests

## Related Projects

  - https://github.com/TKOut-HRSF130/popular-dishes-service
  - https://github.com/TKOut-HRSF130/photos-carousel-service
  - https://github.com/TKOut-HRSF130/bookings-service
  - https://github.com/TKOut-HRSF130/reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```



# Service Plan for Bookings Feature
## Service Owner: Johnny Tang
What are your service's inputs and outputs (API Spec)?
Define all the API endpoints that will be used to consume and publish data. What is the shape of the data (i.e. list all the properties and types) for each API endpoint and/or message?

All API requests coming from the bookings feature will be going to the end point ‘/api/bookings/:{restaurantId}’, with restaurantId being the unique identifier for each restaurant. 

The API will accept both ‘GET’ and ‘POST’ requests.

GET - Search for table
The request will require two properties: the time for reservation and the party size. A successful request will have a response with a status 200 and either a list of available times within 2.5 hours of the requested time on the given date for the specific party size or an empty list indicating no available reservation times. 

# Request Data Format:
date: *String
partySize: Integer

### GET - get restaurant name
The request takes no properties. It will only use the restaurant Id included in the API endpoint and respond with a the name of that specific restaurant.

# Request Data Format:
date: *String
partySize: Integer


### Post - Reserve a table
The request will require four properties: time for reservation, the party size, the name of reserver and phone-number of reserver. Fifth property of occasion will be optional. A successful request will have a response with a status 200.

### Request Data Format:
date: *String
partySize: Integer
name: String
contactInfo: String
occasion (optional): String

### PUT - Update Reservation:
The request will require 6 properties: reservaion_id, the party size, the name of reserver, phone-number of resrver, the date of the reservation and the occasion. A successful request will respond with 204.

### Request Data Format:
reservation_id: int
party_size: int
name: string
date: *String
occasion: *String

### DELETE - Delete Reservation:
This request will removed the reservation tied to the supplied id from the database. A successful request will respond with 204.

### Request Data Format:
reservation_id: int


*Date string to be in 'December 17, 1995 03:24:00' format. Will also need to be rounded to the nearest 30 minutes to give relevant data.
# Data Schema
How will your data be stored? What DBMS do you plan to use and why? If you are using a SQL database, what is the schema for this data (create an ER diagram)? It is useful to think about the organization of your data in a DMBS even if you are using a noSQL datastore. In that case describe the shape of the data for all collections you plan to use.

The data for the reservations will be stored in a SQL database. There will be two tables, one containing all the restaurants and one containing all the reservations. The relation between restaurants and reservations will be one to many. Each reservation will reference a specific restaurant through its restaurant ID.


