import './App.css';
import CurrentWeather from './components/weather';
import SearchWeather from './components/SearchContainer'
import ForcastWeather from './components/Forcast';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("Detroit")
  return (
    <section>
      <div className='divContainter'>
        <div className='mainDisplay'>
          <p>Current Weather Conditions:</p>
          <CurrentWeather 
          city={search}/>
          <p>8 Day Forecast:
          <ForcastWeather
          city={search} />
          </p>
        </div>
          <div className='search'>
          <SearchWeather 
          setSearch={setSearch} />
        </div>
      </div>
    </section>
       

  );
}

export default App;
