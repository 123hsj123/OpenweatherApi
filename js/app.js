// https://home.openweathermap.org/users/signup

var search=document.getElementById('search');

//events
search.addEventListener("keyup",(e)=>{
    // e.preventDefault();
    if(e.keyCode===13){
        var getCityName=e.target.value;
    }
    getWeather(getCityName);

});

function getWeather(getCityName){
    const weatherapi=`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&APPID=e5c953e93755e5679a890ab24374b343`;
    window
    .fetch(weatherapi)
    .then(data=>{
        data
        .json()
        .then(weather=>{
            console.log(weather);
            var output=[];

            // console.log(weather.coord.lon);
            // console.log(weather.coord.lat);
            var weatherData=weather.weather;
           

            for(let x of weatherData){

                output+=`<div class="col-md-4 offset-4 mt-4 card">
                <div class="card-body">
                <h1>${weather.name}</h1>
                <span class="icon">
                <img src="http://openweathermap.org/img/wn/${x.icon}.png"/>
                </span>
                <p><span>temp:</span>
                <span class="temp">${weather.main.temp}&deg;c</span></p>
                <span class="des float-left">${x.description}</span>
                <span class="des float-right">${x.main}</span>
                </div>
                </div>`;

                // console.log(x);
                // console.log(x.id);
                // console.log(x.main);
                // console.log(x.description);
                // console.log(x.icon);
                document.getElementById('template').innerHTML=output;

            }

        })
        .catch(err=>console.log(err));
    })
    .catch(err=>console.log(err));
    
}