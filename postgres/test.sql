DROP DATABASE IF EXISTS datashare;
CREATE DATABASE datashare;

\c datashare;

DROP TABLE IF EXISTS restaurants;
CREATE TABLE restaurants
(
  restaurantId SERIAL NOT NULL,
  restaurantName VARCHAR NOT NULL,
  capacity SMALLINT NOT NULL CHECK (capacity <= 250),
  openHrs VARCHAR (10) NOT NULL,
  closingHrs VARCHAR (10) NOT NULL,
  PRIMARY KEY (restaurantId)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  userId SERIAL NOT NULL,
  firstName VARCHAR (20) NOT NULL,
  lastName VARCHAR (20) NOT NULL,
  phoneNumber VARCHAR (25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (userId)
);

DROP TABLE IF EXISTS bookings;
CREATE TABLE bookings
(
  bookingId SERIAL NOT NULL,
  date VARCHAR(100),
  userId INT,
  restaurantId INT NOT NULL,
  partySize SMALLINT NOT NULL CHECK
(partySize > 0),
  occasion VARCHAR (20) DEFAULT NULL,
  specialRequest VARCHAR (255)DEFAULT NULL,
  PRIMARY KEY (bookingId),
  FOREIGN KEY (userId) REFERENCES users(userId),
  FOREIGN KEY (restaurantId) REFERENCES restaurants (restaurantId)
);


COPY restaurants FROM '/Users/michael/HRSF130/SDC/Booking/Booking-service/postgres/restaurants.csv' DELIMITER ',' ;
COPY users FROM '/Users/michael/HRSF130/SDC/Booking/Booking-service/postgres/users.csv' DELIMITER ',' ;
COPY bookings FROM '/Users/michael/HRSF130/SDC/Booking/Booking-service/postgres/bookings.csv' DELIMITER ',' ;

-- psql -U postgres -a -f (file name)
