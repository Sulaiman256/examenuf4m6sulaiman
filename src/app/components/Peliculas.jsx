"use client";

import React, { useState, useEffect } from 'react';
export function Peliculas() {

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
    }, [page]);

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-white text-3xl font-bold mb-8 text-center">Películas y Series</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {peliculas.map((movie) => (
                        <div
                            key={movie.id}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                        >
                            <div className="aspect-[2/3] bg-gradient-to-br from-gray-700 to-gray-600 relative">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>


                            <div className="p-4">
                                <h3 className="text-white text-lg font-semibold mb-2">{movie.title}</h3>
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="text-yellow-400 text-sm font-medium">{movie.vote_average.toFixed(1)}</span>
                                    <span className="text-gray-500 text-sm">({movie.release_date})</span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}