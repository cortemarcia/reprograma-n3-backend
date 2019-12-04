const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PokemonsSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  foto: { type: String, required: true },
<<<<<<< HEAD
  senha: { type: String, required: true },
=======
>>>>>>> 3324dce62e2af3acfee3f93829e5f8e4fea3acaa
  nivel: { type: Number },
})

const pokemonsModel = mongoose.model('pokemons', PokemonsSchema);

module.exports = { pokemonsModel, PokemonsSchema };
