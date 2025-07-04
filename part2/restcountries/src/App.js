import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    if (!search) {
      setCountries([])
      setSelectedCountry(null)
      return
    }

    axios.get(`https://restcountries.com/v3.1/name/${search}`)
      .then(response => {
        setCountries(response.data)
        setSelectedCountry(null)
      })
      .catch(() => {
        setCountries([])
        setSelectedCountry(null)
      })
  }, [search])

  const handleShowCountry = (country) => {
    setSelectedCountry(country)
  }

  return (
    <div>
      <h1>Find countries</h1>
      <input 
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by country name"
      />

      {countries.length > 10 && <p>Too many matches, specify another filter.</p>}

      {countries.length > 1 && countries.length <= 10 && (
        <ul>
          {countries.map(country => (
            <li key={country.cca3}>
              {country.name.common}{' '}
              <button onClick={() => handleShowCountry(country)}>show</button>
            </li>
          ))}
        </ul>
      )}

      {selectedCountry && <CountryDetails country={selectedCountry} />}

      {countries.length === 1 && !selectedCountry && (
        <CountryDetails country={countries[0]} />
      )}
    </div>
  )
}

export default App
