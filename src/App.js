import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=1050')
      .then(data => {
        setPokemon(data.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      {pokemon &&
        pokemon.map(mon => {
          return <h1>{mon.name}</h1>
        })}
    </div>
  )
}

export default App
