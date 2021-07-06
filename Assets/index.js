1






// let weather = {
//     "apiKey": b5ab120171c8236c0b40722895f5f571
// }
function callAPI(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=b5ab120171c8236c0b40722895f5f571')
    .then((response) => response.json())
    .then((data) => console.log(data))
}

callAPI ()
console.log("yolo")
// b5ab120171c8236c0b40722895f5f571 --> API KEY FOR WEATHER APP


//getting the city name 


let button = document.getElementById("button")

button.addEventListener('click', () => searchCity(), () => console.log('worked'))

let City = document.getElementById("CCITY").innerHTML

function searchCity(){
    
    console.log(City)
}