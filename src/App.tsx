import React from 'react';
import 'App.css';
import { BrowserRouter, Routes, Route, use } from 'react-router-dom';
import { Home, Profile } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
