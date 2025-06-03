"use client";
import { useState } from "react";
import { Peliculas } from "./Peliculas";
import Detalle from "./Detalle";

export default function MovieExplorer() {
    const [seleccionarIdPelicula, setseleccionarIdPelicula] = useState(null);

    const handleMovieClick = (movieId) => {
        setseleccionarIdPelicula(movieId);
    };

    const handleCloseDetails = () => {
        setseleccionarIdPelicula(null);
    };    return (
        <div className="h-screen bg-gray-900 flex">
            <div className={`transition-all duration-300 ${seleccionarIdPelicula ? 'w-1/2' : 'w-full'}`}>
                <Peliculas 
                    onMovieClick={handleMovieClick} 
                    isCompact={seleccionarIdPelicula !== null}
                />
            </div>
            
            {seleccionarIdPelicula && (
                <div className="w-1/2 border-l border-gray-700 transition-all duration-300">
                    <Detalle 
                        movieId={seleccionarIdPelicula} 
                        onClose={handleCloseDetails}
                    />
                </div>
            )}
        </div>
    );
}
  