```sh

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6test.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 200 looping VUs for 10m0s (gracefulStop: 30s)


running (10m00.2s), 000/200 VUs, 648317 complete and 0 interrupted iterations
default ✓ [======================================] 200 VUs  10m0s

    data_received..............: 372 MB 619 kB/s
    data_sent..................: 52 MB  86 kB/s
    http_req_blocked...........: avg=3.92µs   min=1µs     med=3µs      max=17.91ms p(90)=5µs      p(95)=7µs
    http_req_connecting........: avg=117ns    min=0s      med=0s       max=5.6ms   p(90)=0s       p(95)=0s
    http_req_duration..........: avg=172.46ms min=3.55ms  med=163.63ms max=1.16s   p(90)=206.66ms p(95)=263.51ms
    http_req_receiving.........: avg=41.22µs  min=11µs    med=32µs     max=36.85ms p(90)=61µs     p(95)=77µs
    http_req_sending...........: avg=16.54µs  min=4µs     med=12µs     max=22.43ms p(90)=24µs     p(95)=34µs
    http_req_tls_handshaking...: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s
    http_req_waiting...........: avg=172.4ms  min=2.93ms  med=163.58ms max=1.16s   p(90)=206.6ms  p(95)=263.43ms
    http_reqs..................: 648317 1080.246461/s
    iteration_duration.........: avg=185.1ms  min=16.04ms med=175.51ms max=1.17s   p(90)=218.79ms p(95)=276.03ms
    iterations.................: 648317 1080.246461/s
    vus........................: 200    min=200 max=200
    vus_max....................: 200    min=200 max=200
```




```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '60s', target: 200 },
    { duration: '300s', target: 220 },
    { duration: '150s', target: 230 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 50 },
    { duration: '10s', target: 0 },
  ],
  rps: 3000,
};

export default function () {
  let response;
  response = http.get('http://localhost:3000/');
  sleep(.01);
}
```
```sh
        /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6test.js
     output: -

  scenarios: (100.00%) 1 scenario, 230 max VUs, 10m40s max duration (incl. graceful stop):
           * default: Up to 230 looping VUs for 10m10s over 7 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (10m10.0s), 000/230 VUs, 673838 complete and 0 interrupted iterations
default ✓ [==================================] 000/230 VUs  10m10s

    data_received..............: 386 MB 633 kB/s
    data_sent..................: 54 MB  88 kB/s
    http_req_blocked...........: avg=3.6µs    min=1µs     med=3µs      max=28.33ms p(90)=4µs      p(95)=5µs
    http_req_connecting........: avg=143ns    min=0s      med=0s       max=28.26ms p(90)=0s       p(95)=0s
    http_req_duration..........: avg=159.06ms min=575µs   med=166.32ms max=1.3s    p(90)=206.9ms  p(95)=246.98ms
    http_req_receiving.........: avg=42.97µs  min=12µs    med=33µs     max=53.48ms p(90)=63µs     p(95)=80µs
    http_req_sending...........: avg=15.61µs  min=4µs     med=11µs     max=23.95ms p(90)=22µs     p(95)=31µs
    http_req_tls_handshaking...: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s
    http_req_waiting...........: avg=159ms    min=501µs   med=166.27ms max=1.3s    p(90)=206.84ms p(95)=246.9ms
    http_reqs..................: 673838 1104.586731/s
    iteration_duration.........: avg=169.89ms min=10.71ms med=176.86ms max=1.31s   p(90)=217.48ms p(95)=258.2ms
    iterations.................: 673838 1104.586731/s
    vus........................: 1      min=1   max=229
    vus_max....................: 230    min=230 max=230
```


```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 150,
  duration: '10m',
  rps: 0,
};

export default function () {
  let id = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3000/api/bookings/${id}`);
  sleep(.1);
}
```
```sh

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6test.js
     output: -

  scenarios: (100.00%) 1 scenario, 150 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 150 looping VUs for 10m0s (gracefulStop: 30s)


running (10m00.6s), 000/150 VUs, 256863 complete and 0 interrupted iterations
default ✓ [======================================] 150 VUs  10m0s

    data_received..............: 305 MB 508 kB/s
    data_sent..................: 26 MB  43 kB/s
    http_req_blocked...........: avg=8.78µs   min=1µs      med=4µs      max=90.73ms  p(90)=8µs      p(95)=15µs
    http_req_connecting........: avg=1.12µs   min=0s       med=0s       max=7.25ms   p(90)=0s       p(95)=0s
    http_req_duration..........: avg=249.98ms min=4.98ms   med=158.97ms max=4.63s    p(90)=543.36ms p(95)=721.91ms
    http_req_receiving.........: avg=73.31µs  min=17µs     med=54µs     max=154.39ms p(90)=102µs    p(95)=127µs
    http_req_sending...........: avg=26.18µs  min=5µs      med=16µs     max=125.78ms p(90)=34µs     p(95)=47µs
    http_req_tls_handshaking...: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
    http_req_waiting...........: avg=249.88ms min=4.9ms    med=158.88ms max=4.63s    p(90)=543.28ms p(95)=721.78ms
    http_reqs..................: 256863 427.658876/s
    iteration_duration.........: avg=350.45ms min=105.27ms med=259.39ms max=4.73s    p(90)=644.3ms  p(95)=822.47ms
    iterations.................: 256863 427.658876/s
    vus........................: 150    min=150 max=150
    vus_max....................: 150    min=150 max=150
```
