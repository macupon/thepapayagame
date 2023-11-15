import PlayersList from './components/PlayersList/PlayersList';
import './App.css';
// import { useContext, useState } from 'react';
// import { PlayersContext } from './contexts/PlayersContext';



function App() {
  return (
    <div>
      <header className='header-div'>
        <h1>WELCOME</h1>
      </header>
      <div>
        <h2>Players:</h2>
      </div>
      <div className='cards-list-div'>
        <PlayersList/>
      </div>
    </div>
  );
}

export default App;
