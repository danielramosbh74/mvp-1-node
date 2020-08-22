var inputElement = document.querySelector('input[name=name1]');
var btnElement = document.querySelector('button.button1');

btnElement.onclick = function() {
  var text = inputElement.value;

  // The only problema is that I don't know how to pass "text" outside the function...
  
  const color = text;

  if (color === 'blue') {
    // console.log (color + ' is my favorite color');
    // alert(color + ' is my favorite color');
    document.open();
    document.write(color + ' is my favorite color');
    document.close();

} else {
    // console.log ('I like ' + color + `, but it isn't my favorite color`);
    // alert('I like ' + color + ' but it isn`t my favorite color');
    document.open();
    document.write('I like ' + color + ' but it isn`t my favorite color');
    document.close();
}
  
  alert(color);

}

