import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //   const message = winner
  //     ? `winner is ${winner}`
  //     : `Next player is ${current.isXNext ? 'X' : '0'} `;

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : '0'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span>and{' '}
          <span className="text-orange">0</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
