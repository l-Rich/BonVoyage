import { useState, useEffect } from 'react'


function ForcastWeather () {
    const [forcastWeather, setForcastWeather] = useState([])

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=42.3314&lon=-83.0458&exclude={current,minutely,hourly}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
            .then((res ) => res.json())
            .then((json) => {
                // console.log(json.daily)
                // console.log(json.daily[6].temp)
                console.log(`http://api.openweathermap.org/data/2.5/weather?lat=42.3314&lon=-83.0458&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
                setForcastWeather(json.daily)
            }) 
    }, [])
    
    return (
        <section>           
           <div>
               {
               forcastWeather.map((byDay)=>{
                console.log(byDay)   
                return <div className="forcast">{byDay.temp?.day}</div>
               })
               }
           </div>
        </section>
    )
    
}

    

export default ForcastWeather