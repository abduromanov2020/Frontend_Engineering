import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function TopRated() {
    const [movies, setMovies] = useState([]);

    const getTopRatedMovies = async () => {
        const res = await axios(ENDPOINTS.TOP_RATED);
        setMovies(res.data.results);
    }

    useEffect(getTopRatedMovies, [])
    

    return (
        <div>
            <Hero />
            <Movies movies={movies} title={"Top Rated"}/>
        </div>
    )
}

export default TopRated