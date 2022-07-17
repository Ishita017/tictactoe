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
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isxNext: true },
  ]);
  // const [isXNext, setIsXNext] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : '0'} `;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : '0';
        }

        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
    // setIsXNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
