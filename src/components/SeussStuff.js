import { useState, useEffect } from 'react'


function SeussSays () {
    const [SeussSaid, setSeussSaid] = useState()
    

    function seussStuff () {
    fetch(`https://seussology.info/api/quotes/random/10`)
            .then((res ) => res.json())
            .then((json) => {
                setSeussSaid(json[0].text)
            }) .catch(err => {
                console.log(err)
            })
    }
    
    useEffect(() => {
        seussStuff()
        
    }, [])
   console.log(SeussSaid)
    return (
        <div>
            {SeussSaid}<button onClick={seussStuff}>Need Inspiration</button>
            
        </div>
    )
    
}

    

export default SeussSays