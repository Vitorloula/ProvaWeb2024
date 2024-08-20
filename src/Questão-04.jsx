import React, { useState, useEffect } from "react";

const Questao04 = () => {
  const [capitais, setCapitais] = useState([]);
  const [maiorPopulacao, setMaiorPopulacao] = useState(null);
  const [menorPopulacao, setMenorPopulacao] = useState(null);

  useEffect(() => {
    // Função assíncrona para buscar dados da Promise
    const fetchData = async () => {
      try {
        // Criando uma Promise que resolve com os dados das capitais
        const data = await new Promise((resolve) => {
          resolve([
            { capital: ["Dublin"], population: 4994724 },
            { capital: ["Nicosia"], population: 1207361 },
            { capital: ["Madrid"], population: 47351567 },
          ]);
        });

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
      <h2>Questão 04</h2>
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

export default Questao04;
