import { timingSafeEqual } from "crypto"

// CLASS MÃE
class Garrafa {
    constructor(marca, cor, tamanho, tipo) {
        this._marca = marca
        this._cor = cor
        this._tamanho = tamanho
        this._tipo= tipo
    }

    get marca() {
        return this._marca
    }
    set marca(novaMarca) {
        this._marca = novaMarca

    }
    
    get cor() {
        return this._cor
    }

    set cor(novaCor) {
        this._cor = novaCor
    }

    get tamanho(){
        return this._tamanho
    }
    set tamanho(novoTamanho){
        this._tamanho = novoTamanho
    }

    get tip(){
        return this._tipo
    }
    set tipo(novoTipo){
        this._tipo= novoTipo
    }

    
    
}
//  CLASS FILHO
class Carimbo extends Garrafa {
    constructor(marca, cor, tamanho, corDaTinta, medida, qualidade) { // parametros da classe Mãe + classe Filho
        super(marca, cor, tamanho) //parametros da classe Mãe
        this._corDaTinta = corDaTinta
        this._medida = medida
        this._qualidade = qualidade
    }

    get medida(){
        return this._medida
    }

    set medida(novaMedida){
        this._medida= novaMedida
    }

    get qualidade(){
        return this._qualidade
    }
    set qualidade(novaQualidade){
        this._qualidade= novaQualidade
    }
       
    get corDaTinta(){
        return this._corDaTinta
    }
    set corDaTinta(novaCor){
        this._corDaTinta(novaCor)
    }
}

const carimbou = new Carimbo('estilo', null,null,'preto', 'pequeno', 'alta')
// USANDO CLASS CARIMBO
carimbou.medida
console.log (carimbou.medida)
carimbou.medida= 'grande'
console.log(carimbou.medida)



// USANDO CLASS CARIMBO c/CLASSE GARRAFA(MÃE)
carimbou.marca
console.log(carimbou.marca)
carimbou.marca= "Style"
console.log(carimbou.marca)


// USANDO CLASS HIPERGARRAFA(FILHO)
const hiperGarrafa = new Garrafa('coii', 'transparente', null)

hiperGarrafa.marca
console.log(hiperGarrafa.marca)
hiperGarrafa.marcaNatura= 'Nabj'
console.log(hiperGarrafa.marcaNatura)
console.log(marcaNatura('Natura'))

hiperGarrafa.cor
console.log(hiperGarrafa.cor)
hiperGarrafa.cor = 'Branco'
console.log(hiperGarrafa.cor)

