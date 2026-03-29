"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { url } from "inspector";
import { ReactNode } from "react";
type DialogProps = {
    trigger: ReactNode;
    children: ReactNode;
    id?:           number;
    titulo?:       string;
    genero?:       string;
    sinopsis?:     string;
    urlPortada?:   string;
    estreno?:      number;
    calificacion?: number;
    plataforma?:   string;

    footer?: ReactNode;
    size?: "sm" | "md" | "lg";
};
export default function Dialog({
            trigger, 
            children, 
            id, 
            titulo, 
            genero, 
            sinopsis, 
            urlPortada, 
            estreno, 
            calificacion, 
            plataforma, 
            footer, 
            size="md"
        }: DialogProps) {
            const sizes = {
                sm: "w-[350px]",
                md: "w-[500px]",    
                lg: "w-[700px]", 
            };
  return (
    <DialogPrimitive.Root>
        <DialogPrimitive.Trigger asChild>
            {trigger}
        </DialogPrimitive.Trigger>
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
            <DialogPrimitive.Content className="fixed items-center bg-white p6 rounded-xl shadow-xl top-1/2 left-1/d -translate-y-1/2 ${sizes[size]}">
                {titulo && (<DialogPrimitive.Title className="text-xl font-bold mb-2">{titulo}</DialogPrimitive.Title>)}
                {urlPortada && <img src={urlPortada} 
                                    alt={titulo} 
                                    className="w-full h-48 object-cover rounded mb-4" 
                                    fill
                                    height={300}
                                    width={500}
                                    />
                }
                {genero && <p className="text-sm text-gray-500 mb-2">Género: {genero}</p>
                }
                {sinopsis && <p className="text-gray-600 mb-4">{sinopsis}</p>
                }
                {estreno && <p className="text-sm text-gray-500 mb-2">Estreno: {estreno}</p>
                }
                {calificacion && <p className="text-sm text-gray-500 mb-2">Calificación: {calificacion}</p> 
                }
                {plataforma && <p className="text-sm text-gray-500 mb-2">Plataforma: {plataforma}</p>
                }
                {footer && <div className="mt-6 flex justify-end gap-3">{footer}</div>}
                {children}
			    <DialogPrimitive.Close className="absolute top-4 right-4 text-gray-400 hover:text-black">
                    X
                </DialogPrimitive.Close>
		    </DialogPrimitive.Content>
	    </DialogPrimitive.Portal>
	</DialogPrimitive.Root>
);      
}