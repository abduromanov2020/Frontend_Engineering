import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function NowPlaying() {
    const [movies, setMovies] = useState([]);

    const getNowPlayingMovies = async () => {
        const res = await axios(ENDPOINTS.NOW_PLAYING);
        setMovies(res.data.results);
    }

    useEffect(getNowPlayingMovies, [])
    

    return (
        <div>
            <Hero />
            <Movies movies={movies} title={"Now Playing Movie"}/>
        </div>
    )
}

export default NowPlaying