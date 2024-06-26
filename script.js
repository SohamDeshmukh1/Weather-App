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
    console.log(data);
    showCity.innerHTML = city;
    temp.innerHTML = data.temperature;
    wind.innerHTML = data.wind;
    dis.innerHTML = data.description;

    forecastDiv.innerHTML = '';
    // await data.forecast.foreach(
    //     (day) => {  
    //         let daydivs = document.createElement('div');
    //         let daydivs = document.createElement('div');
    //         daydivs.innerHTML = `<h2>Day:${day.temperature}</h2>`;
    //         daydivs.innerHTML = `<h2>Day:${day.wind}</h2>`;
    //     }
    // );
    // need to check how foreach runs again for my own satisfaction
    // cause i know for of and for in loops better

    for (let i of data.forecast){
        let daydivs = document.createElement('div');
        daydivs.innerHTML = `<h2>Day:${i.day}</h2><h3>
        <h2>Temp:${i.temperature}</h2>
        <h2>Wind:${i.wind}</h2>`;
        forecastDiv.appendChild(daydivs);    
    }
    // if(data.description.value == ''){

    // }
    // i wanted to add background change as per discription but nvm
    // forecastDiv.appendChild(forecast);

    }
