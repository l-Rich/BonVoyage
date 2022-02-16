import { useState, useEffect } from 'react'


function ForecastWeather (props) {
    const [forcastWeather, setForcastWeather] = useState([])
    // const [cityInformation, setCityInformation] = useState("")
    const {latitude}=props
    const {longitude}=props
    const {city} =props
        
    // useEffect(() => {
    //     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.REACT_APP_API_KEY_2}`)
    //     .then((res) => res.json())
    //     .then((json) => {
    //         setCityLat(json.results[0].bounds.northeast.lat)
    //         setCityLng(json.results[0].bounds.northeast.lng)
    //     })
    // }, [])
    
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={current,minutely,hourly}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
            .then((res ) => res.json())
            .then((json) => {
                setForcastWeather(json.daily)
            }) 
    }, [city])
    console.log(longitude)
    return (
        <section>           
           <div>
               {
               forcastWeather.map((byDay)=>{   
                return <div className="forcast">{byDay.temp?.day}</div>
               })
               }
           </div>
        </section>
    )
    
}

    

export default ForecastWeather