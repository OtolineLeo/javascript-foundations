const pessoa1 = {
    nome: 'Leo',
    sobreNome: 'Otolissimo',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobreNome} esta falando oi, e minha idade é ${this.idade}.`);
    },

    incremtenaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incremtenaIdade();
pessoa1.fala();

