// a2335d7d0c3e4bfea26142935231202

let data;

const input = document.querySelector(".search-bar")
const count = document.querySelector(".count")
const cityname = document.querySelector(".city")
const humid =  document.querySelector(".humid")
const temp =  document.querySelector(".temp")
const logoImage = document.querySelector(".logoImage");
const speed = document.querySelector(".speed")
const dir = document.querySelector(".dir")
const description = document.querySelector(".description")
const state = document.querySelector(".state")


const getData = async (event) =>{
    event.preventDefault();
    if(!input.value){
        alert("please enter city name")
        return;
    }
   const city = input.value;

   const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=a2335d7d0c3e4bfea26142935231202&q=${city}`
   );
   
   const orgData = await fetchData.json();
   data = orgData;
   console.log(data)

   count.innerHTML = data.location.country;
   state.innerHTML = data.location.region;

   cityname.innerHTML = data.location.name;
   humid.innerHTML = data.current.humidity;
   speed.innerHTML = data.current.wind_kph;
   temp.innerHTML =  data.current.temp_c;
   description.innerHTML = data.current.condition.text;
   logoImage.src = data.current.condition.icon;
   dir.innerHTML = data.current.wind_dir; 



}