import React from 'react';
import './Css/App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
};

export default App;
