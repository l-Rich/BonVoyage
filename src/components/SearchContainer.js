function SearchWeather (props) {
    // console.log(props)
    const {setSearch} = props
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.elements.query.value)
        setSearch(event.target.elements.query.value)
    }
    return (
        <div className="form">
          <h1>Select a City</h1>
          <form onSubmit={handleSubmit}>
            <input name="query" type="search" />
            <button>Check Weather</button>
          </form>
        </div>
      );
  }

export default SearchWeather