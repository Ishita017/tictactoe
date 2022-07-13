import React, { useState } from 'react';
import Board from './Components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';
const App = () => {
  // return (
  //   //<>this is react fragment , it is used when you need to wrap content and don't want to use div
  //   //component should return signle element so react fra gment is used .
  //   <>
  //     <h1>Welcome to React Vite Micro App!</h1>
  //     <p>Hard to get more minimal than this React app.</p>
  //   </>
  // );
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : '0'} `;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : '0';
        }

        return square;
      });
    });
    setIsXNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
