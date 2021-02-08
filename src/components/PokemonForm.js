import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')

function handleSubmit(e) {
  e.preventDefault()
  console.log('submitted!')
// bundle stateVariables
  const formData = {
    name: name,
    hp: hp,
    sprites: {
      front: front,
      back: back
    }
  }
// make POST Request
  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  .then((r) => r.json())
  .then((newPoke) => {
    // reference to pageResetter from parent(will do next)
    onAddPokemon(newPoke)
  })
  setName('')
  setHp('')
  setFront('')
  setBack('')
}

  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
