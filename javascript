var Display = function(displayElement) {
  var display = displayElement;
function setText(message) {
    display.innerText = message;
  }
  return {setMessage: setText};
};

function isValid(button) {
    return button.innerText.length == 0;
}

function CheckForWinner(squares, players, currentTurn) {
    if (squares[0].innerText == players[currentTurn] &&
        squares[1].innerText == players[currentTurn] &&
        squares[2].innerText == players[currentTurn]) {
        return true;
    }
     if (squares[3].innerText == players[currentTurn] &&
        squares[4].innerText == players[currentTurn] &&
        squares[5].innerText == players[currentTurn]) {
        return true;
    }
     if (squares[6].innerText == players[currentTurn] &&
        squares[7].innerText == players[currentTurn] &&
        squares[8].innerText == players[currentTurn]) {
        return true;
    }
     if (squares[0].innerText == players[currentTurn] &&
        squares[3].innerText == players[currentTurn] &&
        squares[6].innerText == players[currentTurn]) {
        return true;
    }
     if (squares[1].innerText == players[currentTurn] &&
        squares[4].innerText == players[currentTurn] &&
        squares[7].innerText == players[currentTurn]) {
        return true;
    }
     if (squares[2].innerText == players[currentTurn] &&
        squares[5].innerText == players[currentTurn] &&
        squares[8].innerText == players[currentTurn]) {
        return true;
    }
    if (squares[0].innerText == players[currentTurn] &&
        squares[4].innerText == players[currentTurn] &&
        squares[8].innerText == players[currentTurn]) {
        return true;
    }
     if (squares[2].innerText == players[currentTurn] &&
        squares[4].innerText == players[currentTurn] &&
        squares[6].innerText == players[currentTurn]) {
        return true;
    }
}

function setMark(btn, mark) {
    btn.innerText = mark;
}

function isBoardFull(squares) {
    for (var i = 0, len = squares.length; i < len; i++)
    if (squares[i].innerText.length == 0) {
        return false
    }
    return true;
}

function main() {
    var squares = document.querySelectorAll("#game button");
    var players = ["x", "O"];
    var currentTurn = 0;
    var isGameOver = false;
    var display = new Display(document.querySelector("#gameActDis"))
    
    display.setMessage("game is ready, player " + players[currentTurn] + " turn.");
     for (var i = 0, len = squares.length; i < len; i++)
    squares[i].addEventListener("click", function(){
        if (isGameOver) 
            return;
        
        
        if (!isValid(this)) {
            display.setMessage("invalid move");
        }
        else{
            setMark(this, players[currentTurn]);
            
            isGameOver = CheckForWinner(squares, players, currentTurn);
            
            
            if (isGameOver) {
                display.setMessage("player " + players[currentTurn] + " won!");
                return;
            }
            
            
            if (isBoardFull(squares)) {
                display.setMessage("Draw");
                return;
            }
            
           
            currentTurn = currentTurn ^ 1;
            
            display.setMessage("player " + players[currentTurn] + " move.");
        }
        
    });
    
}

main();
