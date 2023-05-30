const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = menu[1];

menu.push('Contato');
console.log(menuServices);
console.log(menu);



const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let higherNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
      result += 1;
    }
  };
  
  if (result === 0) {
    console.log('Nenhum valor ímpar encontrado');
  } else {
    console.log(result);
  };

for (let index = 0; index < numbers.length; index += 1) {
    const numeros = numbers[index];
    console.log(numeros);
};

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
    console.log(result);
};

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
};

if (result > 20) {
    console.log('O valor da média aritimética é maior que 20');
} else {
    console.log('O valor da média aritimética é menor que 20');
};

let average = result/numbers.length;
console.log(average);
result = result / numbers.length;
console.log(higherNumber);

// Desafio fatorial

let fatorial = 1;
for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;    
}
console.log(fatorial);

let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

for (let index = word.length - 1; index >= 0; index -= 1) {
    reverseWord += word[index];
  };
  
  console.log(reverseWord);


let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    inputLine = inputLine + symbol;
    console.log(inputLine);
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};