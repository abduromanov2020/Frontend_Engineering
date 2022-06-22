import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import { updateMovie } from '../../features/moviesSlice';
import ENDPOINTS from '../../utils/constants/endpoints';

function NowPlaying() {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const res = await axios(ENDPOINTS.NOW_PLAYING);
        dispatch(updateMovie(res.data.results))
    }

    useEffect(getNowPlayingMovies, [])
    

    return (
        <div>
            <Hero />
            <Movies title={"Now Playing Movie"}/>
        </div>
    )
}

export default NowPlaying