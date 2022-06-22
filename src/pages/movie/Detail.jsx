import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import DetailMovie from '../../components/DetailMovie/DetailMovie'
import Movies from '../../components/Movies/Movies';
import { updateMovie } from '../../features/moviesSlice';
import ENDPOINTS from '../../utils/constants/endpoints';

function Detail() {

  const params = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => getRecommendationsMovies(), [params.id]);

  const getRecommendationsMovies = async () => {

    const res = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));

    dispatch(updateMovie(res.data.results));
  }


  return (
    <>
    <DetailMovie />
    <Movies title={"Recommendations Movie"}/>
    </>
  )
}

export default Detail