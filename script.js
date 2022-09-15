
function buildSquare(number){
  let fraction = 960/number;
  for (i = 0; i<number; i++){
    for (j = 0; j<number; j++){
      var div = document.createElement("div");
      div.style.width = fraction+'px';
      div.style.height = fraction+'px';
      div.style.background = 'red';
      div.className = 'pixel';
      document.getElementById("main").appendChild(div);
    }
  }
}

function changeSquare(event){
  event.preventDefault();
    const initial = document.querySelectorAll('.pixel');
    initial.forEach(item => {
      item.remove();
    })
  const number = document.getElementById('number').value;
  
  document.getElementById('main').style.columnCount = number;
  
  buildSquare(number);
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach(item => {
  item.addEventListener('mouseover', function(e){
      e.target.style.background = 'black';
  })
  })
}

