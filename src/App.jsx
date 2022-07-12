import React from 'react';
import Board from './Components/Board';
import './styles/root.scss';
const App = () => {
  // return (
  //   //<>this is react fragment , it is used when you need to wrap content and don't want to use div
  //   //component should return signle element so react fra gment is used .
  //   <>
  //     <h1>Welcome to React Vite Micro App!</h1>
  //     <p>Hard to get more minimal than this React app.</p>
  //   </>
  // );

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board />
    </div>
  );
};
export default App;
