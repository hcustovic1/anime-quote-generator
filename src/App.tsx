import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAnime } from './api/anime/hooks';

function App() {
  const { data, status } = useAnime();

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{status}</p>

        {status === 'loading' && 'loading...'}
      </header>
    </div>
  );
}

export default App;
