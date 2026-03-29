"use client"

import Dialog from "@/components/Dialog";

type serieModalProps = {
    titulo: string;
    genero: string;
    sinopsis: string;
    urlPortada: string;
    estreno: number;
    calificacion: number;
    plataforma: string;
}
export default function SerieModal({
    titulo,
    genero,
    sinopsis,
    urlPortada,
    estreno,
    calificacion,
    plataforma,
}: serieModalProps) {
    return (
        <Dialog
            trigger={<button className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow-sm shadow-blue-200 hover:bg-blue-700 transition-colors">Ver detalles</button>}
            titulo={titulo}
            genero={genero}
            sinopsis={sinopsis}
            urlPortada={urlPortada}
            estreno={estreno}
            calificacion={calificacion}
            plataforma={plataforma}
            footer={<button className="bg-gray-200 px-3 py-1 rounded">Cerrar</button>}
        />
    );
}