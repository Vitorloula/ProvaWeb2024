import { useState } from 'react'
import Questao01 from './Questão-01'
import Questao02 from './Questão-02'
import Questao03 from './Questão-03'
import Questao04 from './Questão-04'
import './App.css'

function App() {
  return (
    <div>
      <h1>Questões</h1>
      <Questao01 />
      <Questao02 />
      <Questao03 />
      <Questao04 />
    </div>
  );
}

export default App;