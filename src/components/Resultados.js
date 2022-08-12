import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import swAlert from '@sweetalert/with-react';
// https://api.themoviedb.org/3/search/company?api_key=2375fe0981726488e00d09570e844cd8&query=¿?
const Resultados = () => {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');
    const [moviesResults, setMoviesResults] = useState([]);
     useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=2375fe0981726488e00d09570e844cd8&query=${keyword}`;
        axios.get(endPoint)
        .then(response => {
            const moviesArray = response.data.results;
            if (moviesArray.length === 0) {
                swAlert(<h4>No hay resultados</h4>)
            }
            setMoviesResults(moviesArray);
            console.log(moviesArray);
        })
        .catch(error => {
        console.log(error);
        })
    },[keyword]);

     return (
        <>
        <h2>Buscaste:<em>{keyword}</em></h2>
        {/* preguntar */}
        {moviesResults.length === 0 && <h3>No hay resultados</h3>}
        <div className='row'>
        {moviesResults &&
            moviesResults.map((oneMovie, idx)  => {
                return (
        <div className='col-4' key={idx}>
            <div className="card my-4">
            {/* https://api.themoviedb.org/3/collection/${oneMovie.poster_path}/images?api_key=2375fe0981726488e00d09570e844cd8&language=en-US */}
              <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="movie poster" />
                <div className="card-body text-center">
                 <h5 className="card-title">{oneMovie.title}</h5>
                 <p className="card-text">{oneMovie.overview}...</p>
                 <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                </div>
            </div>
        </div>
                )
            })
        }
        
    </div>
        </> 
    )
}

export default Resultados;