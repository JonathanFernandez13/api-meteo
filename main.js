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

formSubmit.addEventListener("submit", e=> {
    e.preventDefault()
    city = valueInput.value;
    if(city.length > 3){
        fetchMeteo()
    }else{
        result.innerHTML = 
            `<div id="result" class="alert aler-danger" role="alert">
                Veuillez saisir le nom de la ville
            </div>`
    }
})
