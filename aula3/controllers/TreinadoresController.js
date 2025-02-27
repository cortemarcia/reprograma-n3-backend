require('dotenv-safe').load()
const SEGREDO= process.env.SEGREDO
const { connect } = require('../models/Repository')
const treinadoresModel = require('../models/TreinadoresSchema')
const { pokemonsModel } = require('../models/PokemonsSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const CHAVE_PUBLICA = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCOl54HaBM/WiL/jPPdFGjm9f8VprUst1J+vs7G/YRGRHYLGqt+M/ljAhcROPy3FdaVi2smqqyZhf4d+EZ9lKM6LVed91sxvcyMFEp6x8R2KS9wIzUtJ6r1MAIKd8HURmbaN4V2TV/FLeOUANRCZ+QhYEy+eNbuVIJANYtXBUSn8QIDAQAB'
const CHAVE_PRIVADA = 'MIICXAIBAAKBgQCOl54HaBM/WiL/jPPdFGjm9f8VprUst1J+vs7G/YRGRHYLGqt+M/ljAhcROPy3FdaVi2smqqyZhf4d+EZ9lKM6LVed91sxvcyMFEp6x8R2KS9wIzUtJ6r1MAIKd8HURmbaN4V2TV/FLeOUANRCZ+QhYEy+eNbuVIJANYtXBUSn8QIDAQABAoGBAIuVS/MAJGdNuxjiSA5Q3mfIw03UhWIiirTb39rXbNbESbGRB/NguW38K8yGNoya6hY2BkwxowgeLKX11js0d5sSHgEgL+pDQtXshHu7vlYU0ksHwfmD/R8+ZHJH6F6L0vuzs4NoVK/8iQHFLboUjF2sORyuLHbBmFZQWhInet8pAkEA0OlL2uHCYhkNuokJ9H+OnJEqKS2BtYSkH3Hrh2opZg2HtvUtXEIxzmj/95CzxMXQtNJhQMK3ekvnF3Upcj2avwJBAK67i8OEKM2jerbFKrBqr6/kUkZeyHLA8I4L2C3/3nKPGUj/GAc2xxuK1XxnpC0e3Wqz5OMwzkWU4Ynblsdq2U8CQHu9U6LICbzVHh6YwP7C9xOhoBlXzPZZJGVDssA4j2DVLsednUqCIsIhy0s1uGUazi3sVpJnQwn7H1vzl6ME/j0CQAT7qj+4LCW5LM27j70aPcppW4NQPq0vHW0fn1moe2KO/CydwcSq5kC909rJZeA3ih755GQqRyeq2EfDMGidfncCQD770Za6sJP1/i1vcdoWuWYnhpiU8TNKjFb2vJEN598amcyJV9PlAAdEkszh6EDA76t6/yT6NoUn/y9x4YskzQo='
connect()

// FUNÇAO DE AUTENTICAÇÃO
const autentica = (request, response) => {
  const authHeader = request.get('authorization')
  let autenticado = false

  if (!authHeader) {
    return autenticado
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, CHAVE_PRIVADA, (error, decoded) => {
    if (error) {
      autenticado = false
    } else {
      autenticado = true
    }
  })
  return autenticado

}
// ___________________________________________



const calcularNivel = (inicio, fim, nivelAtual) => {
  const diff = Math.abs(new Date(inicio) - new Date(fim)) / 3600000

  return (diff / 4) + nivelAtual;
}

const getAll = (request, response) => {
  treinadoresModel.find((error, treinadores) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(treinadores)
  })
}

const getById = (request, response) => {
  // __________________________________________________
  // // invocando a Função Autentica
  const autenticados = autentica(request)

  if (!autenticados) {
    return response.status(401).send("NEGADO")
  }
// ________________________________________________________
  const id = request.params.id

  return treinadoresModel.findById(id, (error, treinador) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (treinador) {
      return response.status(200).send(treinador)
    }

    return response.status(404).send('Treinador não encontrado.')
  })
}

const add = (request, response) => {
  if (!request.body.senha) {
    return response.status(400).send('bota a senha aí')
  }
  const senhaCriptografada = bcrypt.hashSync(request.body.senha)
  request.body.senha = senhaCriptografada
  request.body.grupo = 'comum'
  const novoTreinador = new treinadoresModel(request.body)

  novoTreinador.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoTreinador)
  })
}




// const login = async (request, response) => {
//   const email = request.body.email
//   const senha = request.body.senha
//   const treinador = await treinadoresModel.findOne({ email })
//     if (!treinador) {
//     return response.status(404).send("Email incorreto")
//   } 

//   const senhaValida = bcrypt.compareSync(senha, treinador.senha)
//     if (senhaValida) {
//       return response.status(200).send('Usuário logado')
//     } else {
//       return response.status(401).send("Senha inválido")
//     }
// }

// else{
//     return response.status(401).send('email inválidos')
//   }




const remove = (request, response) => {
  const id = request.params.id

  treinadoresModel.findByIdAndDelete(id, (error, treinador) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (treinador) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Treinador não encontrado.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const treinadorUpdate = request.body
  const options = { new: true }

  treinadoresModel.findByIdAndUpdate(
    id,
    treinadorUpdate,
    options,
    (error, treinador) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (treinador) {
        return response.status(200).send(treinador)
      }

      return response.status(404).send('Treinador não encontrado.')
    }
  )
}

const addPokemon = async (request, response) => {
  const autenticado = autentica(request)
  if (!autenticado)
    return response.status(401).send('Não autorizado')


  const treinadorId = request.params.treinadorId
  const pokemon = request.body
  const novoPokemon = new pokemonsModel(pokemon)
  const treinador = await treinadoresModel.findById(treinadorId)
  console.log(treinador, 'TAKI')
  treinador.pokemons.push(novoPokemon)
  treinador.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(treinador)
  })
}

const treinarPokemon = async (request, response) => {
  const treinadorId = request.params.treinadorId
  const pokemonId = request.params.pokemonId
  const inicio = request.body.inicio
  const fim = request.body.fim
  const treinador = await treinadoresModel.findById(treinadorId)
  const pokemon = treinador.pokemons.find((pokemon) => pokemonId == pokemon._id)
  const novoNivel = calcularNivel(inicio, fim, pokemon.nivel)

  pokemon.nivel = novoNivel
  treinador.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(treinador)
  })
}

const getPokemons = async (request, response) => {
  const treinadorId = request.params.id
  await treinadoresModel.findById(treinadorId, (error, treinador) => {
    if (error) {
      autenticado = false
    } else {
      autenticado = true
    }
  })

  if (pokemon) {
    return response.status(200).send(pokemon)
  }

  return response.status(404).send('Pokémon não encontrado')
}

const updatePokemon = (request, response) => {
  autentica(request, response)
  const treinadorId = request.params.treinadorId
  const pokemonId = request.params.pokemonId
  const options = { new: true }


  treinadoresModel.findOneAndUpdate(
    { _id: treinadorId, 'pokemons._id': pokemonId },
    {
      $set: {
        'pokemons.$.nome': request.body.nome,
        'pokemons.$.foto': request.body.foto
      }
    },
    options,
    (error, treinador) => {
      if (error) {
        return response.status(500).send(error)
      }

      return response.status(200).send(treinador)
    }
  )
}


const login = async (request, response) => {
  const treinadorEncontrado = await treinadoresModel.findOne({ email: request.body.email })

  if (treinadorEncontrado) {
    const senhaCorreta = bcrypt.compareSync(request.body.senha, treinadorEncontrado.senha)

    if (senhaCorreta) {
      const token = jwt.sign(
        {
          email: treinadorEncontrado.email,
          id: treinadorEncontrado._id
        },
        CHAVE_PRIVADA,
        { expiresIn: 6000 }
      )

      return response.status(200).send({ token })
    }

    return response.status(401).send('Senha incorreta.')
  }

  return response.status(404).send('Treinador não encontrado.')
}

module.exports = {
  getAll,
  getById,
  add,
  addAdmin,
  remove,
  update,
  addPokemon,
  treinarPokemon,
  updatePokemon,
  getPokemons,
  login
}
