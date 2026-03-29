"use client";
import React, { useEffect } from 'react';
import { GetSerieResponse } from '../interfaces/getserie.interface';
import { getSeries } from '../services/getserie.service';

export function useGetSerie() {
    const [series, setSeries] = React.useState<GetSerieResponse[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);
    useEffect(() => {
        getSeries()
            .then(data => {
                setSeries(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);
    
    return { 
        series, 
        loading, 
        error 
    };
}