let weather = {
	api: "a45161953479befe9782221f8593e622",
	fetchWeather: function (city) {
	  fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" 
		+ city 
		+ "&units=imperial&appid=" 
		+ this.api
)
		.then((response) => response.json())
		.then((data) => this.showWeather(data));
	},

	showWeather: function(data){
		const { name } = data;
		const{ icon, description } = data.weather[0];
		console.log( data.main );
		const{ temp, humidity } = data.main;
		console.log(name,icon,description,temp,humidity);
		document.querySelector(".city").innerText = "Weather in " + name;
		document.querySelector(".icon").src = "https://openweathermap.org/img/w/" + icon + ".png";
		document.querySelector(".details").innerText = description;
		document.querySelector(".temperature").innerText = temp + "°";
		document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
	},
	search: function() {
		this.fetchWeather(document.querySelector(".search-bar").value);
	},
};

document.querySelector(".search button").addEventListener("click", function(){
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
	if(event.key=="Enter"){
	weather.search();
 }
});