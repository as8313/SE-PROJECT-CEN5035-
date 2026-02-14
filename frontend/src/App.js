import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FoodStalls from './FoodStalls';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <FoodStalls onLogout={() => console.log('logout')} />
    </BrowserRouter>
  );
}

export default App;
