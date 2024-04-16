
const express = require('express');
const pokemonRouter = express.Router();
// const pokemonController = require('../controllers/pokemonController');
const {getAllPokemon,getPokemonById,getPokemonInfo} = require('../controllers/pokemonController');


pokemonRouter.get('/', getAllPokemon);
  pokemonRouter.get('/:id',getPokemonById);
  pokemonRouter.get('/:id/:info',getPokemonInfo);
  
module.exports =pokemonRouter;