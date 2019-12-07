const mongoose = require('mongoose');
const { PokemonsSchema } = require('./PokemonsSchema')
const Schema = mongoose.Schema;
const TreinadoresSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: true },
  pokemons: [PokemonsSchema],
  senha: { type: String, required: true },
<<<<<<< HEAD
  grupo: { type: String }
=======
>>>>>>> 3bb756496e5c1c780c40e14bb9f9a31d977282e6
})

const treinadoresModel = mongoose.model('treinadores', TreinadoresSchema);

module.exports = treinadoresModel;
