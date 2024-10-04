import { Personagem } from "./personagem.js"
//usa-se o extends para associar uma classe a outra, podendo herdar propriedades 
export class Mago extends Personagem{
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'O mago é implacável!'

    //utilizado para determinar quais argumentos serão pedidos na instância.
    constructor(nome, elementoMagico, levelMagico, inteligencia, descricao) {
        super(nome)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
        this.descricao = descricao
        
    }

    obterInsignia() {
        if(this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia() //o super é utilizado para referenciar a classe herdada 
    }
}