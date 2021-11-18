//Get form, date picker and elements to show the data
const info = document.querySelector('#info');
const previousDate = document.querySelector('#previous');
const nextDate = document.querySelector('#next');
const datePicker = document.querySelector('#date');
const imageHeading = document.querySelector('.imageHeading');
const explanation = document.querySelector('#explanation');
const copyright = document.querySelector('#copyright');
const title = document.querySelector('#title');
const fullSizeImage = document.querySelector('#fullSizeImage');

//Format Date object that goes to the datepicker
const getFormatedDate = (date, isNext) => {
    let day = 0;
    if(isNext){
        day = date.getDate() + 2;
    }
    else{
        day = date.getDate();
    }
    let month = date.getMonth() + 1; //January is 0
    let year = date.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    return date = year + '-' + month + '-' + day;
}

//Set todays value to date input and max attribute
let today = new Date();
today = getFormatedDate(today);
datePicker.setAttribute("value", today);
datePicker.setAttribute("max", today);

//Disable Next button if its todays date
const isTodaysDate = () => {
    let todaysDate = new Date();
    todaysDate = getFormatedDate(todaysDate);
    if (datePicker.value == todaysDate) {
        document.getElementById("btn-next").setAttribute("disabled", true);
        return true;
    }
    else return false;
};


//When page loads get todays image and displays it
window.addEventListener("load", function(){
    const date = datePicker.value;    
    const todaysImage = {
        date
    }

    fetchInfo(todaysImage);
});

//Add a listener to the submited form and fetch to the server
info.addEventListener('submit', (error) => {
    error.preventDefault();

    const date = datePicker.value;

    const data = {
        date
    }

    fetchInfo(data);
});

//Add event listener to next and previous buttons
previousDate.addEventListener('submit', (error) => {
    error.preventDefault();

    const isNext = false;
    let previousDate = new Date(datePicker.value);
    const date = getFormatedDate(previousDate, isNext);

    const data = {
        date
    }

    fetchInfo(data);
    datePicker.value = date;
});

nextDate.addEventListener('submit', (error) => {
    error.preventDefault();
    
    const isNext = true;
    let nextDate = new Date(datePicker.value);
    const date = getFormatedDate(nextDate, isNext);

    if(isTodaysDate()){
        explanation.innerHTML = "Wait until tomorrow for the next image/video!";
        document.getElementById("box").innerHTML = "No image or video";
    }
    else{
        const data = {
            date
        }
    
        fetchInfo(data);
        datePicker.value = date;
    }   
});

const fetchInfo = (data) => {
    fetch('/apod', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' }
    })
        .then(response => {
            response.json()
                .then((data) => {
                    if (data.error) {
                        document.getElementById("box").innerHTML = `<p>${data.error}</p>`;
                    }
                    else {
                        title.innerHTML = `Title: ${data.title}`;
                        explanation.innerHTML = data.explanation;
                        if(data.copyright != undefined)copyright.innerHTML = `Author (copyright): ${data.copyright}`;                       
                        fullSizeImage.innerHTML = `See full size image <a href="${data.url}" target="_blank" rel="noopener noreferrer">here</a>.`;
                        if(data.url.indexOf('youtube') > -1){
                            document.getElementById("box").innerHTML = `<iframe class="videoByNasa" width="600" height="400" src=${data.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            document.getElementById("btn-next").removeAttribute("disabled");
                            if(datePicker.value != today) imageHeading.textContent = "Video from " + datePicker.value;
                            else imageHeading.textContent = "Todays image/video:";
                        }
                        else{
                            document.getElementById("box").innerHTML = `<img class="imageByNasa" src=${data.url} width="500" height="600">`;
                            document.getElementById("btn-next").removeAttribute("disabled");
                            if(datePicker.value != today) imageHeading.textContent = "Image from " + datePicker.value;
                            else imageHeading.textContent = "Todays image/video:";                       
                        }                       
                    }
                })
        })
}