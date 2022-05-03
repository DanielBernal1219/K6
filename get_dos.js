import http from 'k6/http';
import {sleep, check} from 'k6';

export let options ={
    stages: [
        {duration : '60s', target: 15}
    ]
}

export default function(data) {

    var url = 'https://httpbin.test.k6.io'
    var result = http.get(url);

    check(result, {
        'status was 200': r => r.status == 200
    })
    sleep(1);
}