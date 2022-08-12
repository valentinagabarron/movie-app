import React from 'react';
import { useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

function Listado () {
    let token = sessionStorage.getItem("token");

    const [ movieList, setMovieList ] =useState([]);

    useEffect (() => {
        const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=2375fe0981726488e00d09570e844cd8&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
        //api
        axios.get(endPoint)
        .then(response => {
            const apiData = response.data;
            console.log(apiData);
            setMovieList(apiData.results);
        })

        .catch (error => {
            swAlert(<h2>Hubo errores, intenta más tarde</h2>);
        })

    }, [setMovieList]); 

    console.log(movieList);

    return (
        <>
        { !token && <Navigate replace to="/listado" /> }
        {/*si no tengo el token entonces lo que yo quiero hacer es una redirección*/}
    
        {/* Estructura base*/}
    <div className='row'>
        {
            movieList.map((oneMovie, idx)  => {
                return (
        <div className='col-3' key={idx}>
            <div className="card my-4">
              <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="movie poster"/>
                <button className='favourite-btn'></button>
                <div className="card-body">
                 <h5 className="card-title">{ oneMovie.title.substring(0, 30) }</h5>
                 <p className="card-text">{ oneMovie.overview.substring(0, 100) }...</p>
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

export default Listado;