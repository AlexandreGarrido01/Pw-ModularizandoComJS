import { alunos } from "./listaAlunos.js";
import { calculaImc } from "./calculaImc.js";
import { apresentarAluno } from "./apresentarAluno.js";

alunos.map((aluno) => {
  aluno.imc = calculaImc(aluno.peso, aluno.altura);
});

function contarAlunosPorClassificacao(alunos) {
  const categorias = {
    abaixoDoPeso: 0,
    pesoNormal: 0,
    sobrepeso: 0,
    obesidadeGrau1: 0,
    obesidadeGrau2: 0,
    obesidadeGrau3: 0,
  };

  alunos.map((aluno) => {
    const classificacao = aluno.classificarIMC(aluno.imc);
    switch (classificacao) {
      case "Abaixo do peso":
        categorias.abaixoDoPeso++;
        break;
      case "Peso normal":
        categorias.pesoNormal++;
        break;
      case "Sobrepeso":
        categorias.sobrepeso++;
        break;
      case "Obesidade grau 1":
        categorias.obesidadeGrau1++;
        break;
      case "Obesidade grau 2":
        categorias.obesidadeGrau2++;
        break;
      case "Obesidade grau 3":
        categorias.obesidadeGrau3++;
        break;
      default:
        break;
    }
  });
  console.table(categorias);
}

alunos.map((aluno) => {
  apresentarAluno(aluno);
});

contarAlunosPorClassificacao(alunos);
