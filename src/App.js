import logo from './logo.svg';
import './App.css';
import React from 'react';
import Buscador from './componentes/Buscador';
import { useState } from 'react';
import Lista from './componentes/Lista';

function App() {
  const [ciudades, setCiudades] = useState(['Estepona', 'Estepa', 'Escañuela','Alcorcon',]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><br></br>
        <Buscador />
        <Lista ciudades={ciudades} />
      </header>
    </div>
  );
}

export default App;
