import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ENDPOINTS from '../../utils/constants/endpoints';
import Button from '../ui/Button';
import StyledDetailMovie from './DetailMovie.styled';

function DetailMovie() {

    const [movies, setMovies] = useState('');

    const params = useParams();

    const genres = movies && movies.genres.map((genre)=> genre.name ).join(", ");
    const idTrailer = movies && movies.videos.results[0].key

    useEffect(() => getDetailMovie(), [params.id]);

    const getDetailMovie = async () => {

      const res = await axios(ENDPOINTS.DETAIL(params.id));

      setMovies(res.data);
    }
  return (
    <StyledDetailMovie>
      <section>
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`} alt={movies.title} />
        </div>
        <div className="info">
          <h2>{movies.title}</h2>
          <h3>{genres}</h3>
          <p>{movies.overview}</p>
          <Button as='a' href={`https://www.youtube.com/watch?v=${idTrailer}`} target="_blank">Watch Trailer</Button>
        </div>
        </section>
        </StyledDetailMovie>

  )
}

export default DetailMovie