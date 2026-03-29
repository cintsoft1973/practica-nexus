"use client";

import SerieCard from '@/components/SerieCard'
import { useGetSerie } from './hooks/useGetSerie'
import SerieModal from './components/SerieModal';
export default function SeriesPage() {
    const { series, loading, error } = useGetSerie();   
    if (loading) {
        return <div className='text-center mt-10'>Cargando series...</div>;
    }
    if (error) {
        return <div className='text-center mt-10 text-red-500'>Error: {error}</div>;
    }
    return (
        <div className='container mx-auto px-4 py-8'>
            <SerieModal titulo={''} genero={''} />
            <h1 className='text-3xl font-bold mb-6'>Series</h1>         
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {series.map(serie => (
                    <SerieCard 
                        key={serie.id}
                        titulo={serie.titulo}
                        genero={serie.genero}
                        sinopsis={serie.sinopsis}
                        urlPortada={serie.urlPortada}
                        estreno={serie.estreno}
                        calificacion={serie.calificacion}
                        plataforma={serie.plataforma} id={0}                         
                    />  
                ))}
            </div>
        </div>
    )
}