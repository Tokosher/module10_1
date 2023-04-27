// https://habr.com/ru/companies/macloud/articles/562700/

// const API_URL = 'http://www.boredapi.com/api/activity/';
const searchParams = new URLSearchParams({
    force: 'yes',
    param: 1
})
console.log(searchParams.toString())
const API_URL = `https://yesno.wtf/api?${searchParams.toString()}`;
const button = document.querySelector('button');
const activityArea = document.querySelector('#activity');

button.addEventListener('click', () => {
    makeRequest(API_URL, yesNoHandler);
})

function yesNoHandler (data) {
    console.log(data)
}

function fillActivityArea ({ activity }) {
    activityArea.textContent = activity;
}

function makeRequest (url, handler) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();
        })
        .then(handler)
        .catch(error => {
            console.log(error)
        })
}

