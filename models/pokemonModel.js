let jsonData = require('../pokedex.json');
//Function to get all the Data
const getAll =() => {
    // console.log(12);
return jsonData;
}
const getPokemonById = (id)=>{
    return jsonData.find(pokemon =>  (pokemon.id == id));

}
module.exports = {
    getAll: getAll,
    getPokemonById :getPokemonById
  };