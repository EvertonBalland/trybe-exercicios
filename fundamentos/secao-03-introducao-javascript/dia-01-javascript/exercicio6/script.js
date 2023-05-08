let pessoaCandidata = 'vá lá';

switch (pessoaCandidata) {
case 'aprovada':
pessoaCandidata = 'Parabéns, você está no grupo de pessoas aprovadas!';
break;
case 'lista':
pessoaCandidata = 'Você está na nossa lista de espera.';
break;
case 'reprovada':
    pessoaCandidata = 'Você está na nossa lista de espera.';
    break;

default:
    console.log('Informação incorreta.');
}
console.log(pessoaCandidata);