let formSubmit = document.getElementById("formSubmit")
let valueInput = document.getElementById("valueInput")
let city = ""
let meteo = []
const ApiKey = "bfa8200505af970020423bbd04d6b77f"

const fetchMeteo = async () => {
    const ApiUri = `http://api.weatherstack.com/current?access_key=${ApiKey}&query=${city}`;
    meteo = await fetch(ApiUri) . then((reponse) => reponse.json())
    console.log(meteo);
}

const displayMeteo = async ()=>{
    await fetchMeteo()
    result.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
      <img src="${meteo.current.weather_icons}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meteo.location.name} ${meteo.location.region} ${meteo.location.country}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${meteo.current.weather_descriptions}</h6>
        <p class="card-text">temperature: ${meteo.current.temperature}🌡️</p>
        <p class="card-text">humidité: ${meteo.current.humidity}% 💧</p>
        <p class="card-text">foce du vent: ${meteo.current.wind_speed} km/h 🌬️</p>
        <p class="card-text">index uv :${meteo.current.uv_index}🌞</p>
        <p class="card-text">precipitation: ${meteo.current.precip}cm 🌤️🌥️🌦️🌨️🌩️</p>

      </div>
    </div>
    `
}

formSubmit.addEventListener("submit", e=> {
    e.preventDefault()
    city = valueInput.value;
    (city.length > 3) ?
        displayMeteo()
    :
        result.innerHTML = 
            `<div id="result" class="alert aler-danger" role="alert">
                Veuillez saisir le nom de la ville
            </div>`
})
