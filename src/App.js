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
          <ul className="currentWeather"><h1>Current Temperature:</h1></ul>
          <CurrentWeather 
          city={search}/>
            <div className="Forecast-Header"><h4>Temperature the next 8 days</h4></div>
            <div className="forecast-days-container">
                <div className="days">Day 1 </div>
                <div className="days">Day 2 </div>
                <div className="days">Day 3 </div>
                <div className="days">Day 4 </div>
                <div className="days">Day 5 </div>
                <div className="days">Day 6 </div>
                <div className="days">Day 7 </div>
                <div className="days">Day 8 </div>
          </div>
          <div className="forecast-weather">
          <ForecastWeather
          city={search} 
          latitude= {cityLat}
          longitude= {cityLng} />
          </div>
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
