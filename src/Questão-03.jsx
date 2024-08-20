import React, { useState, useEffect } from "react";

const Questao03 = () => {
  const [capitais, setCapitais] = useState([]);
  const [maiorPopulacao, setMaiorPopulacao] = useState(null);
  const [menorPopulacao, setMenorPopulacao] = useState(null);

  useEffect(() => {
    // Função assíncrona para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/region/europe?fields=capital,population"
        );
        const data = await response.json();

        setCapitais(data);

        // Encontrar a capital com maior e menor população
        const maior = data.reduce((prev, current) =>
          prev.population > current.population ? prev : current
        );
        const menor = data.reduce((prev, current) =>
          prev.population < current.population ? prev : current
        );

        setMaiorPopulacao(maior);
        setMenorPopulacao(menor);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Questão 03</h2>
      {maiorPopulacao && menorPopulacao ? (
        <div>
          <p>
            Capital com maior população: {maiorPopulacao.capital[0]} (
            {maiorPopulacao.population} habitantes)
          </p>
          <p>
            Capital com menor população: {menorPopulacao.capital[0]} (
            {menorPopulacao.population} habitantes)
          </p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Questao03;
