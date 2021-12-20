let weather = {
  apiKey: "aea8811ce08d9fa322399c6d41422c47",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
      return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Fuktighet: " + humidity + "%";
    document.querySelector(".wind").innerText =   "Vind hastighet: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
   document.querySelector(".search button").addEventListener("click", function () {
   weather.search();
});
   document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
weather.fetchWther("Stockholm");

// SIMPLE FETCH API TEST
// --- Resourses you need to build this API app --- //
//
// 1. API test; registration on openweathermap.
// 2. Key declaration
//          let weatherapp = { key:"id-api-number you got"}
// 3. Within function; fetch information from API
//          let weatherapp= {
//                key:"",
//                functionname: function (info*information you look for) {
//                             FETCH*method ( info + info + info + this.key)
//                             .then (action) => { conditions}
//           }
// }
// 4. Conditions & Error message.  
// 5. DOM adjustments on HTML.
// 6. Click-function
// 7. Event-Searchbar function