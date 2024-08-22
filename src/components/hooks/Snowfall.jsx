// src/components/Snowfall.js
import React, { useEffect } from 'react';
//import './Snowfall.css'; // Añade estilos personalizados aquí

const Snowfall = () => {
  useEffect(() => {
    // Lógica para generar copos de nieve
    const numberOfFlakes = 100;
    const flakes = [];

    for (let i = 0; i < numberOfFlakes; i++) {
      flakes.push({
        id: i,
        style: {
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          opacity: Math.random(),
        }
      });
    }

    const snowfallContainer = document.querySelector('.snowfall');
    flakes.forEach(flake => {
      const flakeElement = document.createElement('div');
      flakeElement.className = 'flake';
      Object.assign(flakeElement.style, flake.style);
      snowfallContainer.appendChild(flakeElement);
    });
  }, []);

  return <div className="snowfall"></div>;
};

export default Snowfall;
