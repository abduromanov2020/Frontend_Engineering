import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';

function Popular() {
    const [movies, setMovies] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`


    const getPopularMovies = async () => {
        const res = await axios(URL);
        setMovies(res.data.results);
    }

    useEffect(getPopularMovies, [])
    

    return (
        <div>
            <Hero />
            <Movies movies={movies} />
        </div>
    )
}

export default Popular