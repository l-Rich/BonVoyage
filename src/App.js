import './App.css';
import CurrentWeather from './components/weather';
import SearchWeather from './components/SearchContainer'
function App() {
  return (
    <section className="div-container">
      <div>
      <CurrentWeather />
    </div>
    <div>
    <form>
        <input type="text" />
        <input type="submit" value="submit"></input>
    </form>
    </div>
       </section>
       

  );
}

export default App;
