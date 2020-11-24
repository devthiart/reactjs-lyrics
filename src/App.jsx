import React from 'react';
import './App.css';
import ContainerLyrics from './components/ContainerLyrics';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Pesquise letras musicais</h1>
      <ContainerLyrics />
      <Footer />
    </div>
  );
}

export default App;
