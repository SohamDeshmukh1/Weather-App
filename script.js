let btn = document.querySelector('#submit');
let showCity = document.querySelector('#cityShow');
let dis = document.querySelector('#description');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let forecastDiv = document.querySelector('#forecast');

btn.addEventListener('click', weather);

async function weather() {
    let city = document.querySelector('#city').value;
    console.log(city);

    let response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
    let data = await response.json();
    showCity.innerHTML = city;
    temp.innerHTML = data.temperature;
    wind.innerHTML = data.wind;
    dis.innerHTML = data.description;

    forecastDiv.innerHTML = '';
    

}
