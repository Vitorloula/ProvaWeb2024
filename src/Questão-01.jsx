import React from "react";

// Componente Questao01A criado usando função arrow
const Questao01A = () => {
  // Definindo a lista de objetos que será passada como props
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 },
  ];

  return (
    <div>
      {/* Passando a lista como props para o componente Questao01B */}
      <Questao01B lista={lista} />
    </div>
  );
};

// Questao01B criado usando função clássica
function Questao01B(props) {
  // Recebendo a lista de objetos via props
  const { lista } = props;

  // Encontrando o maior valor de cada objeto na lista
  const maioresValores = lista.map((item) => Math.max(item.a, item.b, item.c));

  return (
    <div>
      <h2>Questão 01</h2>
      <ul>
        {/* Renderizando os maiores valores de cada objeto */}
        {maioresValores.map((valor, index) => (
          <li key={index}>
            Maior valor do objeto {index + 1}: {valor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questao01A;
