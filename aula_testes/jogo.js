
// MINHA VERSÃO:
// const jogo = (numeroGerado, resposta) => {
    
//        if (numeroGerado > resposta) {
        
//         return {
//             'acertou': false,
//             'mensagemErro': "Tente um número maior"
//         }
//     } else if (numeroGerado < resposta) {
//         return {
//             'acertou': false,
//             'mensagemErro': "Tente um número menor"
//         }
//     } else {
//         return { 'acertou': true }
//     }
// }

// module.exports = jogo


/* VERSÃO DA ANNA: */

const jogo = (numeroGerado, resposta) => {
    const numeroFormatado = parseInt(resposta)
    if (Number.isNaN(numeroFormatado)) {
      return { mensagemErro: 'Não é um número válido' }
    }
  
    const numeroAdivinhado = parseInt(resposta)
  
    if (numeroAdivinhado == numeroGerado) {
      return { acertou: true }
    }
  
    if (numeroAdivinhado > numeroGerado) {
      return { mensagemErro: 'Tente um número menor!' }
    }
  
    return { mensagemErro: 'Tente um número maior!' }
  }
  
  module.exports = jogo