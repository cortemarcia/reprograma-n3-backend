const express = require('express');
const router = express.Router();

const controller = require("../controllers/TreinadoresController")

<<<<<<< HEAD
=======

>>>>>>> 3324dce62e2af3acfee3f93829e5f8e4fea3acaa
router.get('', controller.getAll)
router.post('', controller.add)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)
router.post('/:treinadorId/pokemons', controller.addPokemon)
router.patch('/:treinadorId/pokemons/:pokemonId/treinar', controller.treinarPokemon)
<<<<<<< HEAD
router.get('/:treinadorId/pokemons/:pokemonId', controller.getPokemonById)
router.patch('/:treinadorId/pokemons/:pokemonId', controller.updatePokemon)
=======
router.get('/:id/pokemons', controller.getPokemons)
router.patch('/:treinadorId/pokemons/:pokemonId', controller.updatePokemon)
router.get('/:treinadorId/pokemons/:pokemonId', controller.getPokemonById)
>>>>>>> 3324dce62e2af3acfee3f93829e5f8e4fea3acaa
router.post('/login', controller.login)

module.exports = router
