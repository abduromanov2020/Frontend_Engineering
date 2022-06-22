import axios from 'axios';
import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import { updateMovie } from '../../features/moviesSlice';
import ENDPOINTS from '../../utils/constants/endpoints';

function Popular() {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const res = await axios(ENDPOINTS.POPULAR);
        dispatch(updateMovie(res.data.results));
    }

    useEffect(getPopularMovies, [])
    

    return (
        <div>
            <Hero />
            <Movies title={"Popular Movie"}/>
        </div>
    )
}

export default Popular