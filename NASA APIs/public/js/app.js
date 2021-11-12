const info = document.querySelector('#info');
const datePicker = document.querySelector('#date');
const messageOne = document.querySelector('.message-1');
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

info.addEventListener('submit', (error) => {
    error.preventDefault();

    const date = datePicker.value;

    messageOne.textContent = 'Loading..';

    const data = {
        date
    }

    fetch('/apod', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' }
    })
        .then(response => {
            response.json()
                .then((data) => {
                    if (data.error) {
                        messageOne.textContent = data.error;
                    }
                    else {
                        messageOne.setAttribute("src", data.url);
                        messageOne.setAttribute("width", 400);
                        messageOne.setAttribute("height", 500);
                    }
                })
        })
});