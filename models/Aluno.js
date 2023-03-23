export class Aluno {
  nome;
  idade;
  peso;
  altura;
  imc;

  constructor(nome, idade, peso, altura) {
    this.altura = altura;
    this.idade = idade;
    this.nome = nome;
    this.peso = peso;
  }

 
  classificarIMC() {
    if (this.imc < 18.5) {
      return "Abaixo do peso";
    } else if (this.imc < 25) {
      return "Peso normal";
    } else if (this.imc < 30) {
      return "Sobrepeso";
    } else if (this.imc < 35) {
      return "Obesidade grau 1";
    } else if (this.imc < 40) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }

 
}
