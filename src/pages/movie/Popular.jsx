import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function Popular() {
    const [movies, setMovies] = useState([]);

    const getPopularMovies = async () => {
        const res = await axios(ENDPOINTS.POPULAR);
        setMovies(res.data.results);
    }

    useEffect(getPopularMovies, [])
    

    return (
        <div>
            <Hero />
            <Movies movies={movies} title={"Popular Movie"}/>
        </div>
    )
}

export default Popular