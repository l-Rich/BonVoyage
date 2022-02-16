import { useState, useEffect } from 'react'
import './Forecast.css'


function ForecastWeather (props) {
    const [forcastWeather, setForcastWeather] = useState([])
    const {latitude}=props
    const {longitude}=props
    const {city} =props

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={current,minutely,hourly}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
            .then((res ) => res.json())
            .then((json) => {
                setForcastWeather(json.daily)
            }) 
    }, [city, latitude, longitude])
    return (
        <section>           
           <div className="forecast">
               {
               forcastWeather.map((byDay)=>{   
                return <ul className="forecast">{byDay.temp?.day}</ul>
               })
               }
           </div>
        </section>
    )
    
}

    

export default ForecastWeather