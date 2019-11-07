var currentTurn = document.getElementById("currentTurn");
var cells = document.querySelectorAll("#myCells div")
var xorO = 0;

function checkForWin(check1, check2, check3) {
  if(check1.innerHTML !== "" && check1.innerHTML === check2.innerHTML && check1.innerHTML === check3.innerHTML) {
    return true
  }
  else {
    return false
  }
}

function getWinner() {
  //decleration of all the cells within my TTT
  var cell0 = document.getElementById("cell0"),
      cell1 = document.getElementById("cell1"),
      cell2 = document.getElementById("cell2"),
      cell3 = document.getElementById("cell3"),
      cell4 = document.getElementById("cell4"),
      cell5 = document.getElementById("cell5"),
      cell6 = document.getElementById("cell6"),
      cell7 = document.getElementById("cell7"),
      cell8 = document.getElementById("cell8");

// const possibleWins = [
//   [0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[6, 4, 2]
// ];

if(checkForWin(cell0, cell1, cell2))
  myWinners(cell0, cell1, cell2);

if(checkForWin(cell3, cell4, cell5))
  myWinners(cell3, cell4, cell5);

if(checkForWin(cell6, cell7, cell8))
  myWinners(cell6, cell7, cell8);

if(checkForWin(cell0, cell3, cell6))
  myWinners(cell0, cell3, cell6);

if(checkForWin(cell1, cell4, cell7))
  myWinners(cell1, cell4, cell7);

if(checkForWin(cell2, cell5, cell8))
  myWinners(cell2, cell5, cell8);

if(checkForWin(cell0, cell4, cell8))
  myWinners(cell0, cell4, cell8);

if(checkForWin(cell6, cell4, cell2))
  myWinners(cell6, cell4, cell2);

if(xorO % 8 == 0 && currentTurn.innerHTML != "X Won This Game!" && currentTurn.innerHTML != "O Won This Game!") {
  currentTurn.innerHTML = "Draw Game!"
  }

}

function myWinners(myCell1,myCell2,myCell3) {
    myCell1.classList.add("win");
    myCell2.classList.add("win");
    myCell3.classList.add("win");
    if(currentTurn.innerHTML == "X Won This Game!" || currentTurn.innerHTML == "O Won This Game!") {
      currentTurn.innerHTML = currentTurn.innerHTML;  //fixes issue where game keeps updating if someone won
    }
    else {
      currentTurn.innerHTML = myCell1.innerHTML + " Won This Game!";
    }
}

for(var i = 0; i < cells.length; i++) {

  cells[i].onclick = function(){
     if(this.innerHTML !== "X" && this.innerHTML !== "O") {
       if(xorO%2 === 0) {
          console.log(xorO); //for testing
          this.innerHTML = "X";
          currentTurn.innerHTML = "O's Turn";
          getWinner();
          xorO += 1;
       }
       else {
          console.log(xorO);  //for testing
          this.innerHTML = "O";
          currentTurn.innerHTML = "X's Turn";
          getWinner();
          xorO += 1;
     }
   }
  };
}

function playAgain() {
  for(var i = 0; i < cells.length; i++) {
    cells[i].classList.remove("win"); //takes away win state
    cells[i].innerHTML = "";  //resets the cells
    currentTurn.innerHTML = "Play";
    xorO = 0;
  }
}
