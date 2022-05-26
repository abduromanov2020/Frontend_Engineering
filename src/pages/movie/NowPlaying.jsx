import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';

function NowPlaying() {
    const [movies, setMovies] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`


    const getNowPlayingMovies = async () => {
        const res = await axios(URL);
        setMovies(res.data.results);
    }

    useEffect(getNowPlayingMovies, [])
    

    return (
        <div>
            <Hero />
            <Movies movies={movies} />
        </div>
    )
}

export default NowPlaying