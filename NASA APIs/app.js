const axios = require("axios").default;
require('custom-env').env();

const options = {
    method: "GET",
    url: 'https://api.nasa.gov/planetary/apod',
    params: {date: "2021-11-04", api_key: process.env.API_KEY},
};

axios.request(options).then((res) => {
    console.log(res.data);
}).catch((error) => {
    console.log(error);
});
