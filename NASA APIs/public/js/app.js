//Get form, date picker and elements to show the data
const info = document.querySelector('#info');
const datePicker = document.querySelector('#date');
const imageByNasa = document.querySelector('.imageByNasa');
const imageHeading = document.querySelector('.imageHeading');
const videoByNasa = document.querySelector('.videoByNasa');
const messageTwo = document.querySelector('.message-2');

//Set todays value to date input and max attribute
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //Enero es 0
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
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
                        imageByNasa.textContent = data.error;
                    }
                    else {
                        if(data.url.indexOf('youtube') > -1){
                            if(imageByNasa.getAttribute("src") != "") imageByNasa.setAttribute("src", "");
                            if(datePicker.value != today) imageHeading.textContent = "Video from " + datePicker.value;
                            videoByNasa.setAttribute("src", data.url);
                            videoByNasa.setAttribute("width", 600);
                            videoByNasa.setAttribute("height", 400);
                        }
                        else{
                            if(videoByNasa.getAttribute("src") != "") videoByNasa.setAttribute("src", "");
                            if(datePicker.value != today) imageHeading.textContent = "Image from " + datePicker.value;                       
                            imageByNasa.setAttribute("src", data.url);
                            imageByNasa.setAttribute("width", 500);
                            imageByNasa.setAttribute("height", 600);
                        }                       
                    }
                })
        })
}