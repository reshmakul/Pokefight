const Pokemon = require('../models/pokemonModel');


const getAllPokemon = (req, res) => {
   const pokemon = Pokemon.getAll();
   res.json(pokemon);
   
  }

const getPokemonById = (req, res) => {
    // console.log(req.params.id)
    const { id }  =  req.params;
    console.log(typeof(id))
    const pokemon = Pokemon.getPokemonById(id);
    // const pokemon = jsonData.find(pokemon =>  (pokemon.id == id));
    // console.log(pokemon)
    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).json({ error: 'Pokemon not found' });
    }
  }

  const getPokemonInfo =(req, res) => {
    // console.log(req.params.id)
    const { id,info }  =  req.params;
    
    // console.log(typeof(id))
    // console.log(typeof(info));
    const pokemon = Pokemon.getPokemonById(id);
    console.log(pokemon)

    // Retrieve requested information
    let result;
    switch (info) {
        case 'name':
            result = pokemon.name;
            break;
        case 'type':
            result = pokemon.type;
            break;
        case 'base':
            result = pokemon.base;
            break;
        default:
            return res.status(400).json({ error: 'Invalid info parameter' });
    }
  
    // Send the result back to the client
    res.json({ [info]: result });
  }
  

module.exports = {getAllPokemon,getPokemonById,getPokemonInfo};