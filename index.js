const me = require('./person.json');

const axios = require('axios');

function bloop() {
    axios.get("http:localhost:8081/duck/getAll")
        .then(res => console.log(res.data))
        .catch(err => console.error(err));

    console.log('behold ', me);
}

bloop();

