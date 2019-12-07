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
    
    get cor() {
        return this._cor
    }

    set cor(novaCor) {
        this._cor = novaCor
    }

    set marca(novaMarca) {
        this._marca = novaMarca

    }
    
}
//  CLASS FILHO
class Carimbo extends Garrafa {
    constructor(marca, cor, tamanho, corDaTinta, medida, qualidade) {
        super(marca, cor, tamanho)
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
}

const carimbou = new Carimbo('estilo', null,null,'preto', 'pequeno', 'alta')
carimbou.medida
console.log (carimbou.medida)
carimbou.medida= 'grande'
console.log(carimbou.medida)


// USANDO CLASS CARIMBO

carimbou.marca
console.log(carimbou.marca)
carimbou.marca= "Style"
console.log(carimbou.marca)


// USANDO CLASS HIPERGARRAFA
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

