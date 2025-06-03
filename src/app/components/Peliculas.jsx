"use client";

import React, { useState, useEffect } from 'react';
export function Peliculas({ onMovieClick, isCompact = false }) {

    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const BASE_URL = "https://api.themoviedb.org/3/"
    const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTEwNGFiNGJhOTMxOWZjZTNmNjE5MjUxOWUyYzU2MiIsIm5iZiI6MTc0Nzc2MDIwOC44MzcsInN1YiI6IjY4MmNiNDUwNTIxMWE5MTRmMjhjMGQ4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.neOHz3fEzVRWUHM25S9GXs6JyIbp3rULJuaV_fuPjmg"


    async function fetchPeliculas() {
        try {
            const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    authorization: `Bearer ${API_KEY}`
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }

            const data = await response.json();
            console.log(data);
            setPeliculas(data.results);
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchPeliculas();
    }, []);    
    return (
        <div className="h-screen bg-gray-900 p-4 overflow-y-auto">
            <div className="max-w-full">
                <h1 className="text-white text-2xl font-bold mb-6 text-center">Películas Populares</h1>               
                 <div className={`grid gap-4 ${isCompact ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}`}>
                    {peliculas.map((movie) => (
                        <div
                            key={movie.id}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform cursor-pointer"
                            onClick={() => onMovieClick(movie.id)}
                        >
                            <div className="aspect-[2/3] bg-gradient-to-br from-gray-700 to-gray-600 relative">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-3">
                                <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2">{movie.title}</h3>
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="text-yellow-400 text-xs font-medium">{movie.vote_average.toFixed(1)}</span>
                                    <span className="text-gray-500 text-xs">({movie.release_date})</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}