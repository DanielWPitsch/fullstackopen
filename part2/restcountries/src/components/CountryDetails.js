import { useEffect, useState } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null)
  const capital = country.capital?.[0]

  useEffect(() => {
    if (!capital) return

    const apiKey = process.env.REACT_APP_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`

    axios.get(url)
      .then(response => {
        setWeather(response.data)
      })
      .catch(error => {
        console.error('Erro ao buscar clima:', error)
      })
  }, [capital])

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>

      <h3>Languages</h3>
      <ul>
        {country.languages &&
          Object.values(country.languages).map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
      </ul>

      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="200" />

      {weather && (
        <div>
          <h3>Weather in {capital}</h3>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
          <p><strong>Description:</strong> {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default CountryDetails
