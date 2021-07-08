


//________________ API CALL CODE ____________

let currentDay = moment().format('LL')

function callAPI(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + City.value + '&units=imperial&appid=b5ab120171c8236c0b40722895f5f571')
    .then((response) => response.json())
    .then(function(data){
        console.log(data)
        document.getElementById('date0').innerText = data.list[0].dt_txt
        document.getElementById('temp0').innerText = "Temperature: " + data.list[0].main.temp + "°F"
        document.getElementById('wind0').innerText = "Wind: " + data.list[0].wind.speed + " MPH"
        document.getElementById('humidity0').innerText = "Humidity: " + data.list[0].main.humidity + "%"
        document.getElementById('icon0').src = 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png'

        document.getElementById('date1').innerText = data.list[8].dt_txt
        document.getElementById('temp1').innerText = "Temperature: " + data.list[8].main.temp + "°F"
        document.getElementById('wind1').innerText = "Wind: " + data.list[8].wind.speed + " MPH"
        document.getElementById('humidity1').innerText = "Humidity: " + data.list[8].main.humidity + "%"
        document.getElementById('icon1').src = 'http://openweathermap.org/img/w/' + data.list[8].weather[0].icon + '.png'

        document.getElementById('date2').innerText = data.list[16].dt_txt
        document.getElementById('temp2').innerText = "Temperature: " + data.list[16].main.temp + "°F"
        document.getElementById('wind2').innerText = "Wind: " + data.list[16].wind.speed + " MPH"
        document.getElementById('humidity2').innerText = "Humidity: " + data.list[16].main.humidity + "%"
        document.getElementById('icon2').src = 'http://openweathermap.org/img/w/' + data.list[16].weather[0].icon + '.png'

        document.getElementById('date3').innerText = data.list[24].dt_txt
        document.getElementById('temp3').innerText = "Temperature: " + data.list[24].main.temp + "°F"
        document.getElementById('wind3').innerText = "Wind: " + data.list[24].wind.speed + " MPH"
        document.getElementById('humidity3').innerText = "Humidity: " + data.list[24].main.humidity + "%"
        document.getElementById('icon3').src = 'http://openweathermap.org/img/w/' + data.list[24].weather[0].icon + '.png'

        document.getElementById('date4').innerText = data.list[32].dt_txt
        document.getElementById('temp4').innerText = "Temperature: " + data.list[32].main.temp + "°F"
        document.getElementById('wind4').innerText = "Wind: " + data.list[32].wind.speed + " MPH"
        document.getElementById('humidity4').innerText = "Humidity: " + data.list[32].main.humidity + "%"
        document.getElementById('icon4').src = 'http://openweathermap.org/img/w/' + data.list[32].weather[0].icon + '.png'

        document.getElementById('date5').innerText = data.list[39].dt_txt
        document.getElementById('temp5').innerText = "Temperature: " + data.list[39].main.temp + "°F"
        document.getElementById('wind5').innerText = "Wind: " + data.list[39].wind.speed + " MPH"
        document.getElementById('humidity5').innerText = "Humidity: " + data.list[39].main.humidity + "%"
        document.getElementById('icon5').src = 'http://openweathermap.org/img/w/' + data.list[39].weather[0].icon + '.png'



        function callAPI2(){
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + data.city.coord.lat + '&lon=' + data.city.coord.lon + '&exclude=hourly,daily&appid=b5ab120171c8236c0b40722895f5f571')
            .then((response) => response.json())
            .then(function(data){
                console.log(data)
                let uvIndex = data.current.uvi
                const uvDiv = document.getElementById('UV1')
                uvDiv.innerText = ' UV Index: ' + uvIndex

                if (uvIndex < 3) {
                    uvDiv.style.backgroundColor = "green"
                } else if (uvIndex === 3, uvIndex > 3, uvIndex < 6) {
                    uvDiv.style.backgroundColor = "yellow"
                } else if (uvIndex === 6, uvIndex > 6, uvIndex < 8) {
                    uvDiv.style.backgroundColor = "orange"
                } else if (uvIndex === 8, uvIndex > 8, uvIndex < 11) {
                    uvDiv.style.backgroundColor = "red"
                }
            })}

            callAPI2()
    }
    
    )
}




   
//________________ API CALL CODE END ____________

////________________ LOCAL STORAGE SEARCH CODE ____________


const button = document.getElementById("button")
const City = document.getElementById("CCITY")

let neck = localStorage.getItem('searchHistory') 
document.getElementById('searchHistoryy').value = neck
document.getElementById('searchHistoryy').innerText = neck

function searchCity(){
    localStorage.setItem('citySearched', City.value)

    localStorage.setItem('searchHistory', City.value)
    
    callAPI()
    

    document.getElementById('chosenCity').innerText = 'Weather in ' + City.value + ' ' + currentDay
    

}

button.addEventListener('click', () => searchCity())


// console.log(neck)



let searchFromStorage = document.getElementById('buttonDiv') 

searchFromStorage.addEventListener('click', () => searchCityFromStorage())





function searchCityFromStorage(){
    
  City.value = neck
    // localStorage.setItem('searchHistory', City.value)
    
    callAPI()
    
    document.getElementById('chosenCity').innerText = 'Weather in ' + City.value + ' ' + currentDay

}

//________________ LOCAL STORAGE SEARCH CODE END ____________


