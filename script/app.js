// _ = helper functions
function _parseMillisecondsIntoReadableTime(timestamp) {
  //Get hours from milliseconds
  const date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  const hours = '0' + date.getHours();
  // Minutes part from the timestamp
  const minutes = '0' + date.getMinutes();
  // Seconds part from the timestamp (gebruiken we nu niet)
  // const seconds = '0' + date.getSeconds();

  // Will display time in 10:30(:23) format
  return hours.substr(-2) + ':' + minutes.substr(-2); //  + ':' + s
}

// 5 TODO: maak updateSun functie

// 4 Zet de zon op de juiste plaats en zorg ervoor dat dit iedere minuut gebeurt.
let placeSunAndStartMoving = (totalMinutes, sunrise) => {
	const sun = document.querySelector('.js-sun');
  // In de functie moeten we eerst wat zaken ophalen en berekenen.
  sunRise.innerHTML = _parseMillisecondsIntoReadableTime(queryResponse.city.sunrise);
  sunSet.innerHTML = _parseMillisecondsIntoReadableTime(queryResponse.city.sunset);
  // Haal het DOM element van onze zon op en van onze aantal minuten resterend deze dag.
  minutesleft = document.querySelector('.js-time-left');
  // Bepaal het aantal minuten dat de zon al op is.
  let today = new Date();
  const sunriseDate = new Date(sunrise * 1000);
  // Nu zetten we de zon op de initiële goede positie ( met de functie updateSun ). Bereken hiervoor hoeveel procent er van de totale zon-tijd al voorbij is.
  let getCoords = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        getAPI(position.coords.latitude, position.coords.longitude);
      });
    } else {
      getAPI(50.8027841, 3.2097454);
    }
  };
  // We voegen ook de 'is-loaded' class toe aan de body-tag.
  // Vergeet niet om het resterende aantal minuten in te vullen.
  // Nu maken we een functie die de zon elke minuut zal updaten
  // Bekijk of de zon niet nog onder of reeds onder is
  // Anders kunnen we huidige waarden evalueren en de zon updaten via de updateSun functie.
  // PS.: vergeet weer niet om het resterend aantal minuten te updaten en verhoog het aantal verstreken minuten.
};

// 3 Met de data van de API kunnen we de app opvullen
let showResult = (queryResponse) => {
  // We gaan eerst een paar onderdelen opvullen
  // Zorg dat de juiste locatie weergegeven wordt, volgens wat je uit de API terug krijgt.
  var location = document.querySelector('.js-location');
  // Toon ook de juiste tijd voor de opkomst van de zon en de zonsondergang.
  var sunrise = document.querySelector('.js-sunrise');
  var sunset = document.querySelector('.js-sunset')
  // Hier gaan we een functie oproepen die de zon een bepaalde positie kan geven en dit kan updaten.
  document.getElementById(rise).innerHTML = sunrise.innerHTML;
  document.getElementById(set).innerHTML = sunset.innerHTML;
  // Geef deze functie de periode tussen sunrise en sunset mee en het tijdstip van sunrise.
};

// 2 Aan de hand van een longitude en latitude gaan we de yahoo wheater API ophalen.
let getAPI = (lat, lon) => {
	
  // Eerst bouwen we onze url op
  const ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d6872223aa14f1d6ab189695453d29ee&units=metric&lang=nl&cnt=1`;

  // Met de fetch API proberen we de data op te halen.
  fetch(ENDPOINT)
    .then(r => r.json())
    .then(d => {
  // Als dat gelukt is, gaan we naar onze showResult functie.
  showResult(d);
  console.log(d);
  console.log(d.city.sunrise)
    });
};

document.addEventListener('DOMContentLoaded', function () {
  // 1 We will query the API with longitude and latitude.
  getAPI(50.8027841, 3.2097454);
});
