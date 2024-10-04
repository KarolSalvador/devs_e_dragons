import { Personagem } from "./personagem.js"
//usa-se o extends para associar uma classe a outra, podendo herdar propriedades 
export class Arqueiro extends Personagem{
    destreza
    static tipo = 'Arqueiro'
    static descricao = 'Você tem o meu arco!'

    //utilizado para determinar quais argumentos serão pedidos na instância.
    constructor(nome, destreza, descricao) {
        super(nome)
        this.destreza = destreza
        this.descricao = descricao
        
    }

    obterInsignia() {
        if(this.level >= 5 && this.destreza >= 5) {
            return 'Dominador de flechas'
        }
        return super.obterInsignia() //o super é utilizado para referenciar a classe herdada 
    }
}