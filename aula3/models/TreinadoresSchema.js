const mongoose = require('mongoose');
const { PokemonsSchema } = require('./PokemonsSchema')
const Schema = mongoose.Schema;
const TreinadoresSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: true },
<<<<<<< HEAD
  senha: { type: String, required: true },
  pokemons: [PokemonsSchema],
=======
  pokemons: [PokemonsSchema],
  senha: { type: String, required: true },
>>>>>>> 3324dce62e2af3acfee3f93829e5f8e4fea3acaa
})

const treinadoresModel = mongoose.model('treinadores', TreinadoresSchema);

module.exports = treinadoresModel;
