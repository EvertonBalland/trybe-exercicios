// Exercício1
let num1 = 7;
let num2 = 6;
let num3 = 15;

console.log('Soma: ' + (num1 + num2));
console.log('Subtração: ' + (num1 - num2));
console.log('Multiplicação: ' + (num1 * num2));
console.log('Divisão: ' + (num1 / num2));
console.log('Módulo: '  + (num1 % num2));

//Exercício2

if (num1 > num2) {
   console.log(num1 + ' é maior que ' + num2);
} else if (num1 === num2) {
    console.log('Os números são iguais.');
} else {
    console.log(num2 + ' é maior que ' + num1);
}

// Exercício3

if ( num1 > num2 && num1 > num3) {
    console.log('O ' + num1 + ' ainda é maior!'); 
} else if (num2 > num1 && num2 > num3) {
    console.log('Agora é a vez do ' + num2);
} else {
    console.log('Não deu pra vocês o maior é o ' + num3);
}
// Exercício4

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 'triangle';

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;
let allAnglesArePositive = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if (allAnglesArePositive) {
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo inválido');
}

// Exercício5

let chessPiece = 'beeshop';

switch (chessPiece.toLowerCase()) {
    case 'king':
        console.log('King -> Uma casa para qualquer direção');
        break;
    case 'beeshop':
        console.log('Beeshop -> Diagonais');
        break;
    case 'queen':
        console.log('Queen -> Diagonal, horizontal e vertical.');
        break;
    case 'horse':
        console.log('Horse -> "L" pode pular sobre as peças.');
        break;
    case 'tower':
        console.log('Tower -> Horizontal e vertical.');
        break;
    case 'pawn':
        console.log("Pawn -> Uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
        default:
        console.log('Erro, peça inválida!');
        };

// Exercício6

let isEven = false;

if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0)) {
  isEven = true;
};

console.log(isEven);

// Exercício7

let aliquotINSS;
let aliquotIR;

let grossSalary = 2000;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: R$" + (baseSalary - aliquotIR));