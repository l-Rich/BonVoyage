import { useState, useEffect } from 'react'


function SeussSays () {
    const [SeussSaid, setSeussSaid] = useState()
    useEffect(() => {
        fetch(`https://seussology.info/api/quotes/random/10`)
            .then((res ) => res.json())
            .then((json) => {
                setSeussSaid(json[0].text)
            }) .catch(err => {
                console.log(err)
            })
    }, [])
   console.log(SeussSaid)
    return (
        <div>{SeussSaid}</div>
    )
    
}

    

export default SeussSays