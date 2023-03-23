export function calculaImc(peso, altura) {
  return Math.floor(peso / altura ** 2);
}
