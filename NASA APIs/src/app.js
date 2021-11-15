//Import needed modules
const path = require('path');
const express = require('express');
const NasaImageOfTheDay = require('./utils/imageOfTheDayNasaAPI');

//Load env variables
require('dotenv').config();

//Creates app, json parsing and listening port
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

//Define path
const viewsPath = path.join(__dirname, './templates/views');

//Setup
app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(path.join(__dirname, '../public')));

//Creates base URL route "/" and renders index view
app.get('', (req, res) => {
    res.render('index', {
        title: 'Astronomical images & videos by NASA',
    });
});

//Post to NASA API
app.post('/apod', async (req, res) => {
    const {
        date
    } = req.body

    if(!date){
        return res.status(404).send({
            error: "Please select a date"
        });
    }

    try {
        const imageOfTheDay = await NasaImageOfTheDay.getImage(date);

        const url = imageOfTheDay.data.url;
        //console.log(imageOfTheDay);
        //console.log(url);

        return res.json({
            url
        })
    }
    catch(error) {
        console.log(error);

        return res.status(500).json({
            error: "Something went wrong"
        })
    }
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})












/*const options = {
    method: "GET",
    url: 'https://api.nasa.gov/planetary/apod',
    params: {date: "2021-11-04", api_key: process.env.API_KEY},
};

axios.request(options).then((res) => {
    console.log(res.data);
}).catch((error) => {
    console.log(error);
});*/
