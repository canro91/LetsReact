import React from 'react';
import './App.css';
import Weather from './components/Weather';

// Yeah, I know. Don't store sensitive keys. For testing purproses only.
const API_KEY = '23b7f9c35607924f30a9ada97b7faa95';

function App() {
  const [forecast, setForecast] = React.useState({});

  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Medellin&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const temperature = {
        city: response.name,
        country: response.sys.country,

        current: response.main.temp,
        min: response.main.temp_min,
        max: response.main.temp_max,

        description: response.weather[0].description,
        iconId: response.weather[0].id
      };
      setForecast(temperature);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <Weather
        city={forecast.city}
        country={forecast.country}
        current={forecast.current}
        min={forecast.min}
        max={forecast.max}
        description={forecast.description}
        iconId={forecast.iconId}
      />
    </div>
  );
}

export default App;
