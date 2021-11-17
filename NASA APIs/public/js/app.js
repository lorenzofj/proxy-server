//Get form, date picker and elements to show the data
const info = document.querySelector('#info');
const previousDate = document.querySelector('#previous');
const nextDate = document.querySelector('#next');
const datePicker = document.querySelector('#date');
const imageHeading = document.querySelector('.imageHeading');
const videoByNasa = document.querySelector('.videoByNasa');
const explanation = document.querySelector('#explanation');

const getFormatedDate = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //Enero es 0
    let yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return date = yyyy + '-' + mm + '-' + dd;
}

//Set todays value to date input and max attribute
let today = new Date();
today = getFormatedDate(today);
datePicker.setAttribute("value", today);
datePicker.setAttribute("max", today);

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

previousDate.addEventListener('submit', (error) => {
    error.preventDefault();

    let previousDate = new Date(datePicker.value);
    const date = getFormatedDate(previousDate);

    const data = {
        date
    }

    fetchInfo(data);
    datePicker.value = date;
});

nextDate.addEventListener('submit', (error) => {
    error.preventDefault();
    
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
                        explanation.innerHTML = data.explanation;
                        if(data.url.indexOf('youtube') > -1){
                            document.getElementById("box").innerHTML = `<iframe class="videoByNasa" width="600" height="400" src=${data.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            if(datePicker.value != today) imageHeading.textContent = "Video from " + datePicker.value;
                            else imageHeading.textContent = "Todays image/video:";
                        }
                        else{
                            document.getElementById("box").innerHTML = `<img class="imageByNasa" src=${data.url} width="500" height="600">`;
                            if(datePicker.value != today) imageHeading.textContent = "Image from " + datePicker.value;
                            else imageHeading.textContent = "Todays image/video:";                       
                        }                       
                    }
                })
        })
}