fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
      .then(response => response.json())
      .then(data => {
        const city = data.name;
        const temperature = data.main.temp;
        const pressure = data.main.pressure;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const windDirection = data.wind.deg;
        const iconCode = data.weather[0].icon;

        const weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = `
          <p>Місто: ${city}</p>
          <p>Температура: ${temperature} °C</p>
          <p>Тиск: ${pressure} hPa</p>
          <p>Опис: ${description}</p>
          <p>Вологість: ${humidity}%</p>
          <p>Швидкість вітру: ${windSpeed} м/с</p>
          <p>Напрям вітру: ${windDirection}°</p>
          <p>Значок: ${iconCode}</p>
        `;
      })
      .catch(error => {
        console.error('Помилка при отриманні погоди:', error);
      });