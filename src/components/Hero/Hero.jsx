import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoints";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {
    const [movies, setMovies] = useState('');

    const API_KEY = process.env.REACT_APP_API_KEY;

    const genres = movies && movies.genres.map((genre)=> genre.name ).join(", ");
    const idTrailer = movies && movies.videos.results[0].key


    const getTrendingMovies = async () => {
        const res = await axios(ENDPOINTS.TRENDING)

        return res.data.results[0];

    }

    const getDetailedMovies = async () => {
        const trendingMovie = await getTrendingMovies();
        const id = trendingMovie.id;
        
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        const res = await axios(URL);

        setMovies(res.data);

    }

    useEffect(getDetailedMovies, [])

    return (
        <StyledHero>
            <section>
                <div className="info">
                    <h2>{movies.title}</h2>
                    <h4>Genre : {genres}</h4>
                    <p>{movies.overview}</p>
                    <Button as="a" href={`https://www.youtube.com/watch?v=${idTrailer}`} target="_blank">Watch More</Button>
                </div>
                <div className="poster">
                    {movies && <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} alt={movies.Title} />}
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero