/*In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are
 on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). 
For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on 
the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. 
We will then write a function to detect weather or not the two queens are positioned so that they attack each other.
*/

function generateBoard(whiteQueen, blackQueen) {
  const isQueenPosition = (row, column, queen) => row === queen[1] && column === queen[0];
  const board = [];
  for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
    const row = []
    for (let columnIndex = 0; columnIndex < 8; columnIndex++) {
      row.push(isQueenPosition(rowIndex, columnIndex, whiteQueen) || isQueenPosition(rowIndex, columnIndex, blackQueen) ? 1 : 0);
    }
    board.push(row);
  }
  return board;
}

function queenThreat(board) {
  const queens = [];
  for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 8; columnIndex++) {
      if (board[rowIndex][columnIndex] === 1) {
        queens.push([rowIndex, columnIndex]);
      }
    }
  }
  const [queenA, queenB] = queens;
  const sameRow = queenA[1] === queenB[1];
  const sameColumn = queenA[0] === queenB[0];
  const sameDiagonal = Math.abs(queenA[0] - queenB[0]) === Math.abs(queenA[1] - queenB[1]);
  return sameRow || sameColumn || sameDiagonal;
}


let generatedBoard1 = generateBoard([0, 5], [5, 0]);
console.log(generatedBoard1);
console.log(queenThreat(generatedBoard1));
// Expected Output
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
// Expected Output
// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false
/*
Instruction
Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/