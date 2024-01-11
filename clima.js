function getWeather() {
  let key = "24b9c2b30e967bd02cb4d1253612b195";
  navigator.geolocation.getCurrentPosition(showPosition);

  function showPosition(posicion) {
      let lat = posicion.coords.latitude;
      let lon = posicion.coords.longitude;

      fetch(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ES&lat=${lat}&lon=${lon}&appid=${key}`
      )
          .then(response => response.json())
          .then(data => {
              console.log(data);
              let weatherCard = document.createElement("div");
              weatherCard.className = "weather";
              let temperatura = parseInt(data.main.temp);
              let st = parseInt(data.main.feels_like);
              let icono = data.weather[0].icon;
              weatherCard.innerHTML = `<img class="imagenIcono" src="https://openweathermap.org/img/wn/${icono}@2x.png">
                                      <div class="info"><p class="txt-clima">${data.name}</p>
                                      <p class="txt-clima">Temp: ${temperatura}°</p>`;
              let elemento = document.querySelector(".clima");
              elemento.innerHTML = "";  // Limpiar contenido existente antes de agregar el nuevo
              elemento.append(weatherCard);
          })
          .catch(error => {
              console.error('Error al obtener datos del clima:', error);
          });
  }
}