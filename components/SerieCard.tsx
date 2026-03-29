"use client"

import SerieModal from "@/app/series/components/SerieModal";
import { ReactNode } from "react";
type SerieCardProps = {
  id: number;
  titulo: string;
  genero: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion: number;
  plataforma: string;
  action?: ReactNode;
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
  action,
}: SerieCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 overflow-hidden w-72 hover:shadow-lg transition-shadow duration-300">
        <img
          src={urlPortada}
          alt={titulo}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div className="p-4 flex h-full flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-semibold text-lg text-gray-800 flex-1">{titulo}</h2>
            </div>
            <span className="text-sm text-black">Género: {genero}</span>
            
            <div className="flex items-center mt-2">
              <span className="text-sm font-bold text-blue-600 mr-2">
                Calificación:
              </span>
              <span className="text-sm font-bold text-blue-700">
                {renderStars(calificacion)}
              </span>
            </div>
          </div>
          <div>
            <SerieModal
              titulo={titulo}
              genero={genero}
              sinopsis={sinopsis}
              urlPortada={urlPortada}
              estreno={estreno}
              calificacion={calificacion}
              plataforma={plataforma}
            />
          </div>
        </div>
    </div>
  );
}
