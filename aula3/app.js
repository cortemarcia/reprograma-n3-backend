const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
<<<<<<< HEAD
const pokemons = require('./routes/pokemons')
=======
>>>>>>> 3324dce62e2af3acfee3f93829e5f8e4fea3acaa
const treinadores = require('./routes/treinadores')
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
<<<<<<< HEAD
app.use('/pokemons', pokemons)
=======
>>>>>>> 3324dce62e2af3acfee3f93829e5f8e4fea3acaa
app.use('/treinadores', treinadores)

app.get('/', (request, response) => {
  response.send('Olá, mundo!')
})

<<<<<<< HEAD

=======
>>>>>>> 3324dce62e2af3acfee3f93829e5f8e4fea3acaa
app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
