// import { useState, useEffect } from 'react'

// function CurrentWeather () {
//     let URL = 'http://api.weatherstack.com/current'
//     let key =process.env.REACT_APP_API_KEY
//     const [currentWeather, setCurrentWeather] = useState([])

//     useEffect(() => {
//         fetch(URL+'?access_key='+key+`&query=Detroit`)
//         .then(res => res.json())
//             .then(
//                 (result) => {
//                     setCurrentWeather(result)
//                 })})
//     console.log(currentWeather)

//     // console.log(currentWeather)
//     return (  
//         <section>
//             <div>{currentWeather}</div>
//         </section>
//     )
    
// }
    

// export default CurrentWeather
