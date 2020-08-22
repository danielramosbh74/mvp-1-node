// var inputElement = document.querySelector('input[name=name1]');
// var btnElement = document.querySelector('button.button1');

// btnElement.onclick = function() {
//   var text = inputElement.value;

//   // The only problema is that I don't know how to pass "text" outside the function...
  
//   const color = text;

//   if (color === 'blue') {
//     // console.log (color + ' is my favorite color');
//     // alert(color + ' is my favorite color');
//     document.open();
//     document.write(color + ' is my favorite color');
//     document.close();

// } else {
//     // console.log ('I like ' + color + `, but it isn't my favorite color`);
//     // alert('I like ' + color + ' but it isn`t my favorite color');
//     document.open();
//     document.write('I like ' + color + ' but it isn`t my favorite color');
//     document.close();
// }
  
//   alert(color);

// }

// O objetivo inicial agora é apenas testar e focar nos workflows do Node e do NPM no Github Actions

console.log('Testes iniciais');
// Ok, rodou isso, então quero já montar o pacote para depois ir melhorando e acompanhando o fluxo

// Evitar usar o yarn, pois o package-lock.json gerado pelo NPM é necessário no Github Actions
// Executar npm install sem nenhum argumento após o install para resolver esta questõa do package-lock antes de fazer um novo git push para o Actions

// Configurarei abaixo o teste exemplo oficial do Jest para que finalmente consiga executar o workflow completo sem erros e então ter uma "estrutura mínima" pronta para me concentrar na programação de algo útil de forma organizada seguindo as boas práticas.

// Exemplo padrão para o Jest
function sum(a, b) {
    return a + b;
  }
  module.exports = sum;


