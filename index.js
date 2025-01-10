// Question 1 //
var indice = 13;
var soma = 0;
var k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
  console.log(soma);
}

// question 2, Fibonacci //

function pertenceAFibonacci(numero) {
  if (numero < 0) return `${numero} não pertence à sequência de Fibonacci.`;

  let a = 0,
    b = 1;

  while (a <= numero) {
    if (a === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }
    let temp = a + b;
    a = b;
    b = temp;
  }

  return `${numero} não pertence à sequência de Fibonacci.`;
}

// Question 3 //

const dadosFaturamento = [
  { dia: 1, faturamento: 200 },
  { dia: 2, faturamento: 250 },
  { dia: 3, faturamento: 0 },
  { dia: 4, faturamento: 300 },
  { dia: 5, faturamento: 0 },
  { dia: 6, faturamento: 400 },
  { dia: 7, faturamento: 0 },
  { dia: 8, faturamento: 600 },
  { dia: 9, faturamento: 800 },
  { dia: 10, faturamento: 0 },
];

function calcularFaturamentoMensal(dadosFaturamento) {
  const diasValidos = dadosFaturamento.filter((dia) => dia.faturamento > 0);

  if (diasValidos.length === 0) {
    return "Não há dados de faturamento válidos.";
  }

  const menorFaturamento = Math.min(
    ...diasValidos.map((dia) => dia.faturamento)
  );
  const maiorFaturamento = Math.max(
    ...diasValidos.map((dia) => dia.faturamento)
  );

  const somaFaturamento = diasValidos.reduce(
    (soma, dia) => soma + dia.faturamento,
    0
  );
  const mediaMensal = somaFaturamento / diasValidos.length;

  const diasAcimaDaMedia = diasValidos.filter(
    (dia) => dia.faturamento > mediaMensal
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

// Quesion 4 //

function calcularPercentuais(faturamentoPorEstado) {
  const faturamentoTotal = Object.values(faturamentoPorEstado).reduce(
    (soma, valor) => soma + valor,
    0
  );

  const percentuais = {};
  for (const estado in faturamentoPorEstado) {
    percentuais[estado] = (
      (faturamentoPorEstado[estado] / faturamentoTotal) *
      100
    ).toFixed(2);
  }

  return { faturamentoTotal, percentuais };
}

const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const resultado = calcularPercentuais(faturamentoPorEstado);

console.log("Faturamento total: R$", resultado.faturamentoTotal.toFixed(2));
console.log("Percentuais por estado:");
for (const estado in resultado.percentuais) {
  console.log(`${estado}: ${resultado.percentuais[estado]}%`);
}

// Question 5 //

function inverterString(texto) {
  let textoInvertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }
  return textoInvertido;
}
