import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import { updateMovie } from '../../features/moviesSlice';
import ENDPOINTS from '../../utils/constants/endpoints';

function TopRated() {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const res = await axios(ENDPOINTS.TOP_RATED);
        dispatch(updateMovie(res.data.results))
    }

    useEffect(getTopRatedMovies, [])
    

    return (
        <div>
            <Hero />
            <Movies title={"Top Rated"}/>
        </div>
    )
}

export default TopRated