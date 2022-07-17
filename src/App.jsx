import React, { useState } from 'react';
import Board from './Components/Board';
import History from './Components/History';
import StatusMessage from './Components/StatusMessage';
import './styles/root.scss';
import { calculateWinner } from './helpers';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  // return (
  //   //<>this is react fragment , it is used when you need to wrap content and don't want to use div
  //   //component should return signle element so react fra gment is used .
  //   <>
  //     <h1>Welcome to React Vite Micro App!</h1>
  //     <p>Hard to get more minimal than this React app.</p>
  //   </>
  // );
  const [history, setHistory] = useState(NEW_GAME);
  // const [isXNext, setIsXNext] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

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

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active ' : ''} `}
      >
        Start new game
      </button>
      <h2>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"></div>
    </div>
  );
};
export default App;
