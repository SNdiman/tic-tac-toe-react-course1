const checkForSequence = (option1, option2, option3) => {
  if (option1 === null || option2 === null || option3 === null) {
    return false;
  }
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  console.log("IN here");
  //012
  //345
  //678

  //row
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      console.log("row winner");
      return true;
    }
  }

  //column
  for (let i = 0; i < 3; i += 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      console.log("column winner");
      return true;
    }
  }

  //diagnal 1

  if (checkForSequence(board[0], board[4], board[8])) {
    console.log("We have a diagonal winner");
    return true;
  }
  //diagnal 2

  if (checkForSequence(board[2], board[4], board[6])) {
    console.log("We have a diagonal winner");
    return true;
  }

  console.log(board)
  if(!board.includes(null)){
    return "draw"
  }

  return false
  //check if game is drawn
  // game is over or there is no winner
};
