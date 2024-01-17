import logo from './logo.svg';
import './App.css';
import React from 'react';
import Buscador from './componentes/Buscador';
import { useState } from 'react';
import Lista from './componentes/Lista';

function App() {
  const [ciudades, setCiudades] = useState(['Estepona', 'Estepa', 'Escañuela','Alcorcon', 'Altamira', 'Madrid', 'Malaga']);
/*   let valorInput = document.getElementById("userInput").value; */
  let valorInput = "Al";

  function filterItems(arr, query){
    return arr.filter((el) => 
        el.toLowerCase().includes(query.toLowerCase()));
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><br></br>
        <input id="userInput" onChange={() => filterItems(ciudades, valorInput)} type="text" placeholder="Introduce texto"></input>
        <br></br>
{/*         <input type="submit" onClick={() => filterItems(ciudades, valorInput)}></input> */}
        <Lista ciudades={filterItems(ciudades,valorInput)} />
        {console.log(filterItems(ciudades,valorInput))}
      </header>
    </div>
  );
}

export default App;
