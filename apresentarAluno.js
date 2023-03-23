export function apresentarAluno(aluno) {
    const { nome, idade, imc } = aluno;
  const classificacao = aluno.classificarIMC(imc);
  console.log(`${nome}, ${idade} anos, IMC: ${imc} - ${classificacao}`);
}
