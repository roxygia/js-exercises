let value = 0;
let element = null;

window.onload = function() {
  // start
  element = document.getElementById('current-number');
  element.innerText = value;
  // end
}

function addOne(){
  console.log('add one to number');
  // start
  console.log(value);
  value ++;
  console.log(value);
  element.innerText = value;
  // end
}

function subtractOne(){
  console.log('subtract one to number');
  // start
  console.log(value);
  value --;
  console.log(value);
  element.innerText = value;
  // end
}
