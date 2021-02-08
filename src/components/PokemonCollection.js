import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  // const { id, name, hp, sprites } = pokemon

  const allPokemon = pokemon.map((poke) => {
    return <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} sprites={poke.sprites} /> 
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {allPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
