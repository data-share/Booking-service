import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 150,
  duration: '10m',
  // stages: [
  //   { duration: '30s', target: 100 },
  //   { duration: '60s', target: 200 },
  //   { duration: '300s', target: 230 },
  //   { duration: '60s', target: 230 },
  //   { duration: '30s', target: 200 },
  //   { duration: '20s', target: 100 },
  //   { duration: '10s', target: 50 },
  //   { duration: '5s', target: 0 },
  // ],
  rps: 0,
};

export default function () {
  let id = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3000/api/bookings/${id}`);
  sleep(.1);
}