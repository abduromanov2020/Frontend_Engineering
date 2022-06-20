import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import DetailMovie from '../../components/DetailMovie/DetailMovie'
import Movies from '../../components/Movies/Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function Detail() {
  const [movies, setMovies] = useState('');

  const params = useParams();

  
  useEffect(() => getRecommendationsMovies(), [params.id]);

  const getRecommendationsMovies = async () => {

    const res = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));

    console.log(res);

    setMovies(res.data.results);
  }


  return (
    <>
    <DetailMovie />
    {movies && <Movies movies={movies} title={"Recommendations Movie"}/>}
    </>
  )
}

export default Detail