import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [currentSearch, setCurrentSearch] = useState("")
  
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
  .then(response => response.json())
  .then(data => setPokemon(data));
  }, [])

  const filteredPokemon = pokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(currentSearch.toLowerCase())
  })

  function onAddPokemon(newPoke){
    const updatePokemonData = [newPoke, ...pokemon]
    setPokemon(updatePokemonData)
  }
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={onAddPokemon} />
      <br />
      <Search 
        currentSearch={currentSearch} 
        onSearch={(e) => setCurrentSearch(e.target.value)} 
      />
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
