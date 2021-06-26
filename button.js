let randomNumber;

function randomNumb(number) {
  return Math.floor((Math.random() * number) + 1);
}

function numberCheck() {
  const inputBox = document.getElementById('inputBox');
  randomNumber = randomNumb(inputBox.value);

  if (isNaN(inputBox.value)) {
    document.querySelector('.status').textContent = "!!!You must insert a number!!!";
  }else {
    for(let i = 1; i <= inputBox.value; ++i) {
      $('.buttons').append(`<button type="button" id="` + i + `" onclick="choiceCheck(this.id)" class ="miniButtons" >Button ` + i + `</button>`);
    }
    document.querySelector('.status').textContent = " ";
    document.getElementById('submit').style.visibility = 'hidden';
    document.getElementById('restart').style.visibility = 'visible';
  }
}


function choiceCheck(theChoosenButton) {
  if (theChoosenButton == randomNumber) {
    document.querySelector('.status').textContent = "!!!CONGRATS, you win amigo!!!";
    document.querySelector('.status').style.backgroundColor = "green";
  } else {
    document.querySelector('.status').textContent = "Almost.. but you lost..";
    document.querySelector('.status').style.backgroundColor = "red";
  }
}

function restart() {
  window.location.reload(true);
}
