import React from 'react';
import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
function Detalle () {
    let token = sessionStorage.getItem("token");

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const[movie, setMovie] = useState(null);

    useEffect(() => { 
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=2375fe0981726488e00d09570e844cd8&language=es-ES`;
        axios.get(endPoint)
        .then(response => {
            const movieData = response.data;
            setMovie(movieData);
        })
        .catch(error => {
        console.log(error);
        })
    }, [movieID]); 
    return (
    <>
        { !token && <Navigate replace to="/" /> }
        { !movie && <p>Cargando...</p> }
        {movie &&
        <>
         <h2>Título: {movie.title}</h2>
         <div className='row'>
            <div className='col-4'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="..."/>
            </div>
            <div className='col-8'>
                <h5>Fecha de estreno: { movie.release_date}</h5>
                <h5>Reseña:</h5>
                <p>{movie.overview}</p>
                <h5>Rating: {movie.vote_average}</h5>
                <h5>Géneros:</h5> {/*no se puede react.genres porque react no puede renderizar objetos*/}
                <ul>
                    {movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>)}
                </ul>
            </div>
         </div>
        </>
        }
    </>
    );
}

export default Detalle;