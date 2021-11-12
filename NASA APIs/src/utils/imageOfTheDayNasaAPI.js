const axios = require("axios");
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

console.log(process.env.API_KEY);
console.log(process.env.PORT);

module.exports = {
    getImage: (date, start_date, end_date) => axios({
        method: "GET",
        url: BASE_URL,
        headers: {
            "content-type": "application/x-www-form-urlenconded",
        },
        params: {
            date: date,
            api_key: process.env.API_KEY
        }
    })
};