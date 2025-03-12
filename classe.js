class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    atacar(){ 
     if (this.tipo == "Mago"){
       return "O "+this.tipo +" "+this.nome+" tem "+this.idade+" anos de idade e atacou usando magia";
     }
     if (this.tipo == "Guerreiro"){
       return "O "+this.tipo+" "+this.nome+" tem "+this.idade+" anos de idade e atacou usando espada";
     }
     if (this.tipo == "Monge"){
       return "0 "+this.tipo+" "+this.nome+" tem "+this.idade+" anos de idade e atacou usando artes marciais";
     }
     if (this.tipo == "Ninja"){
       return "0 "+this.tipo+" " +this.nome+" tem "+this.idade+" anos de idade e atacou usando shuriken";
     }
     }
  }
  const nome = "Zeus";
  const idade = 20;
  const tipo = "Mago";
  
  const meuHeroi = new heroi(nome, idade, tipo);
  
  console.log(meuHeroi.atacar());