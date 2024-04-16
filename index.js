const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const pokemonRoutes = require('./routes/pokemonRoutes')
// let jsonData = require('./pokedex.json')

app.use(cors())

// Route for Pokemon API
app.use('/pokemon', pokemonRoutes);



app.listen(port, () => {
  console.log(`Pokefight app listening on port ${port}`)
})