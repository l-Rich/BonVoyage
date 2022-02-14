import { useState, useEffect } from 'react'

function CurrentWeather () {
    let URL = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
    let key =process.env.REACT_APP_API_KEY
    const [currentWeather, setCurrentWeather] = useState([])

    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=42.3314&lon=-83.0458&appid=7f6ac03571b9827d5308f728f9548ca4&units=imperial")
        .then(res => res.json())
            .then(
                (result) => {
                    setCurrentWeather(result)
                })})
    // console.log(currentWeather)

    console.log(currentWeather)
    return (
        <div>{currentWeather.name}</div>
    )
    
}
    

export default CurrentWeather
