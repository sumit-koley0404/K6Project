import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        //Ramp-up from 1 to 10 users over 5s
        {duration: '5s', target: 10},
        // Ramp-up from 10 to 30 users and stay for 15s
        {duration: '15s', target: 30},
        //Ramp-down to 0 users over 5s
        {duration: '5s', target: 0}
    ]
}

export default function(){
    http.get('http://test.k6.io');
    sleep(1);
    http.get('http://test.k6.io/contacts.php');
    sleep(2);
    http.get('http://test.k6.io/news.php');
    sleep(1);
}