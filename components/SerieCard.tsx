import React from "react";
type SerieCardProps = {
  id: number;
  titulo: string;
  genero: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion: number;
  plataforma: string;
};

function renderStars(rating: number) {
  const maxStars = 10;
  const normalizedRating = Math.round(Math.max(0, Math.min(maxStars, rating)));

  return Array.from({ length: maxStars }, (_, index) => (
    <span key={index} className="text-yellow-400">
      {index < normalizedRating ? "★" : "☆"}
    </span>
  ));
}

function truncateSinopsis(sinopsis: string) {
  const maxChars = 100;
  return sinopsis.length <= maxChars
    ? sinopsis
    : sinopsis.slice(0, maxChars).trimEnd() + "...";
}

export default function SerieCard({
  titulo,
  genero,
  sinopsis,
  urlPortada,
  estreno,
  calificacion,
  plataforma,
}: SerieCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 overflow-hidden w-72 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <img
          className="w-lg h-64  rounded-md mb-4"
          src={urlPortada}
          alt={titulo}
        />
      
        <div className="p-4 flex flex-col">
          <h2 className="font-semibold text-lg text-gray-800">{titulo}</h2>
          <span className="text-sm text-black">Género: {genero}</span>
          <div className="flex items-center mt-2">
            <span className="text-sm font-bold text-blue-600 mr-2">
              Calificación:
            </span>
            <span className="text-sm font-bold text-blue-700">
              {renderStars(calificacion)}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm font-bold text-blue-600">
              Estreno: {estreno}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm font-bold text-blue-600">
              Plataforma: {plataforma}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm font-bold text-black">
              Sinopsis: {truncateSinopsis(sinopsis)}
            </span>
          </div>
        </div>
    </div>
  );
}
