import './App.css';
import CurrentWeather from './components/weather';
import SearchWeather from './components/SearchContainer'
import ForecastWeather from './components/Forecast';
import { useState, useEffect } from 'react';
import SeussSays from './components/SeussStuff';

function App() {
  const [search, setSearch] = useState("Detroit")
  const [cityLat, setCityLat] = useState("42.4502432")
  const [cityLng, setCityLng] = useState("-82.9104391")

  useEffect(() => {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${process.env.REACT_APP_API_KEY_2}`)
    .then((res) => res.json())
    .then((json) => {
        setCityLat(json.results[0].bounds.northeast.lat)
        setCityLng(json.results[0].bounds.northeast.lng)
    })
}, [search])
  return (
    <section>
      <div className='divContainter'>
        <div className='mainDisplay'>
          <ul>Current Weather Conditions:</ul>
          <CurrentWeather 
          city={search}/>
          <ul>8 Day Forecast:
          <ForecastWeather
          city={search} 
          latitude= {cityLat}
          longitude= {cityLng} />
          </ul>
        </div>
          <div className='search'>
          <SearchWeather 
          setSearch={setSearch} />
        </div>
        <div>
          <SeussSays />
        </div>
      </div>
    </section>
       

  );
}

export default App;
