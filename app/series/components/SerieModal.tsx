"use client"

import Dialog from "@/components/Dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

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
            trigger={<button type="button" className="inline-flex w-full items-center justify-center rounded bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow-sm shadow-blue-200 hover:bg-blue-700 transition-all duration-200 opacity-100">Ver detalles</button>}
            titulo={titulo}
            genero={genero}
            sinopsis={sinopsis}
            urlPortada={urlPortada}
            estreno={estreno}
            calificacion={calificacion}
            plataforma={plataforma}
            footer={
                <DialogPrimitive.Close asChild>
                    <button className="bg-red-600 text-white px-3 py-1 rounded">Cerrar</button>
                </DialogPrimitive.Close>
            }
        />
    );
}