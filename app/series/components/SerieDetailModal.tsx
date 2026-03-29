import Dialog from "@/components/Dialog";
type Serie={
    id: number;
    titulo: string;
    genero: string;
    sinopsis: string;
    urlPortada: string;
    estreno: number;
    calificacion: number;
    plataforma: string;
}
type Props ={
    serie: Serie;
    trigger: React.ReactNode;   
}
export default function SerieDetailModal({serie, trigger}: Props) {
    return (
        <Dialog
            trigger={trigger}
            titulo={serie.titulo}
            genero={serie.genero}
            sinopsis={serie.sinopsis}
            urlPortada={serie.urlPortada}
            estreno={serie.estreno}
            calificacion={serie.calificacion}
            plataforma={serie.plataforma}
            size="md"
            footer={<p>....</p>}
        > 
        <div>   
            Información detallaada de la serie.
        </div>
        
        </Dialog>
    );
}