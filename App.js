document.getElementById('submit-btn').addEventListener('click', function(){
    const inputCity = document.getElementById('input-city');
    const cityName = inputCity.value;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=8f48946270ca131beb506440fac7edd5')
    
    .then(Response => Response.json())
    .then(data => {
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;
        const cityFinal = document.getElementById('city');
        cityFinal.innerText = cityName;
        const tempFinal = document.getElementById('temp');
        tempFinal.innerText = temp.toFixed(2);
        const desFinal = document.getElementById('descri');
        desFinal.innerText = description;
        
        

    })
    .catch(res => alert('please type right city name'))
})