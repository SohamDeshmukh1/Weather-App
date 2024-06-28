let btn = document.querySelector('#submit');
let showCity = document.querySelector('#cityShow');
let dis = document.querySelector('#description');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let forecastDiv = document.querySelector('#forecast');
let info = document.querySelector('#info');
console.log(btn);

btn.addEventListener('click', weather);

async function weather() {
    let city = document.querySelector('#city').value;
    console.log(city);

    let response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
    let data = await response.json();
    console.log(data);

    // info.innerHTML = '';
    // let firstInfo = document.createElement('div');
    // firstInfo.className = 'mt-32 bg-black bg-opacity-50 text-white rounded-xl h-40 w-2/5';
    // firstInfo.innerHTML = `
    //     <h2 class="text-center pt-4">Weather in <span id="cityShow"></span></h2>
    //     <ul class="flex justify-evenly w-100">
    //         <li><span id="temp"> </span><br> Temperature</li>
    //         <li><span id="wind"> </span><br> Wind</li>
    //         <li><span id="description"> </span><br> Weather</li>
    //     </ul>
    // `;
    // For Future Update
    document.body.appendChild(firstInfo); 
    

    showCity.innerHTML = city;
    temp.innerHTML = data.temperature;
    wind.innerHTML = data.wind;
    dis.innerHTML = data.description;


    forecastDiv.innerHTML = '';

    for (let i of data.forecast){
        let daydivs = document.createElement('div');
        daydivs.innerHTML = `<h2>Day:${i.day}</h2><h3>
        <h2>Temp:${i.temperature}</h2>
        <h2>Wind:${i.wind}</h2>`;
        forecastDiv.appendChild(daydivs);    
    }
}
    // if(data.description.value == ''){

    // }
    // i wanted to add background change as per discription but nvm
    // forecastDiv.appendChild(forecast);
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
