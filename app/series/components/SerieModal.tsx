"use client"

import Dialog from "@/components/Dialog";

type serieModalProps = {
    titulo: string;
    genero: string;
}
export default function SerieModal({titulo, genero}: serieModalProps) {
    return ( 
        <Dialog trigger={<button className="bg-blue-500 text-white px-4 py-2 rounded">Ver Detalles</button>}>
            <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
            <p className="text-gray-700 mb-2">Género: {genero}</p>

        </Dialog>
    );
}