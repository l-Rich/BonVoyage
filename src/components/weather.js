import { useState, useEffect } from 'react'


function CurrentWeather (props) {
    const {city}=props
    const [currentWeather, setCurrentWeather] = useState()
    console.log(city)
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
            .then((res ) => res.json())
            .then((json) => {
                setCurrentWeather(json)
            }) .catch(err => {
                console.log(err)
            })
    }, [city])
    // console.log(currentWeather)
    return (
        <section>
            {!city || !currentWeather ? <h2>Loading Weather</h2> 
            : 
            <div> 
              <p>{currentWeather.main?.temp}°F</p>
            <p>{currentWeather.main?.feels_like}°F</p>
           
           <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}></img>  
            </div>
            }
           
           
        </section>
    )
    
}

    

export default CurrentWeather
