import React, { useState } from "react";

const Questao02 = () => {
  // Estado para controlar a imagem do Pokémon (frente ou costas)
  const [isFront, setIsFront] = useState(true);

  // URLs das imagens do Pokémon
  const frontImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
  const backImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

  // Função para alternar entre a imagem de frente e de costas
  const toggleImage = () => {
    setIsFront(!isFront);
  };

  return (
    <div>
      <h2>Questão 02</h2>
      {/* Renderizando a imagem do Pokémon */}
      <img src={isFront ? frontImage : backImage} alt="Pokemon" />
      {/* Botão para alternar a imagem */}
      <button onClick={toggleImage}>Virar</button>
    </div>
  );
};

export default Questao02;
