import { useState, useEffect } from 'react'

function CurrentWeather () {
    let URL = 'http://api.weatherstack.com/current'
    let key =process.env.REACT_APP_API_KEY
    const [currentWeather, setCurrentWeather] = useState([])

    useEffect(() => {
        fetch(URL+'?access_key='+key+'&query=Detroit')
        .then(res => res.json())
            .then(
                (result) => {
                    setCurrentWeather(result)
                })})
    console.log(currentWeather)

    // console.log(currentWeather)
    return (
        <div>{currentWeather}</div>
    )
    
}
    

export default CurrentWeather
