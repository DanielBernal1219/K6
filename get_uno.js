import http from 'k6/http';
import {sleep, check} from 'k6';

export let options ={
    stages: [
        {duration : '1s', target: 5}
    ]
}

export default function(data) {

    var url = 'https://pokeapi.co/api/v2/pokemon/ditto'
    var result = http.get(url);

    check(result, {
        'status was 200': r => r.status == 200
    })
    sleep(1);
}