fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19").then(e=>e.json()).then(e=>{var p=e.name,t=e.main.temp,n=e.main.pressure,a=e.weather[0].description,r=e.main.humidity,i=e.wind.speed,d=e.wind.deg,e=e.weather[0].icon;document.getElementById("weather").innerHTML=`
          <p>Місто: ${p}</p>
          <p>Температура: ${t} °C</p>
          <p>Тиск: ${n} hPa</p>
          <p>Опис: ${a}</p>
          <p>Вологість: ${r}%</p>
          <p>Швидкість вітру: ${i} м/с</p>
          <p>Напрям вітру: ${d}°</p>
          <p>Значок: ${e}</p>
        `}).catch(e=>{console.error("Помилка при отриманні погоди:",e)});