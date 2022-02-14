import './App.css';
import CurrentWeather from './components/weather';
import SearchWeather from './components/SearchContainer'
function App() {
  return (
    <section>
      <div className='divContainter'>
        <div className='mainDisplay'>
       <p>Current Weather Conditions:</p>
       <CurrentWeather />
       <p>5 Day Forecast:</p>
        </div>
        <div className='right-side'>

        </div>
      </div>
      <div className='search'>
      Select a new city <form>
        <input type="text" />
        <input type="submit" value="submit"></input>
    </form>
    </div>
    </section>
       

  );
}

export default App;
