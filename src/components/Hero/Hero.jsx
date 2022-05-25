import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

function Hero() {
    const [movies, setMovies] = useState('');

    const fetchMovies = async () => {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
        const response = await fetch(url);
        const json = await response.json();

        setMovies(json)
    }

    useEffect(fetchMovies, [])

    const StyledHero = styled.div`
        background-color: #2b2d42;
        color: #d5bdaf;

        section {
            padding: 3rem;
            text-align: center;
        }

        p {
            margin: 1rem 0;
        }

        img {
            border-radius: 2rem;
        }

        @media screen and (min-width: 768px) {
        section {
            max-width: 1200px;
            margin: 0 auto;
            text-align: left;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
}
    `

    return (
        <StyledHero>
            <section>
                <div>
                    <h2>{movies.Title}</h2>
                    <h4>Genre : {movies.Genre}</h4>
                    <p>{movies.Plot}</p>
                    <Button size="lg">Watch More</Button>
                </div>
                <div>
                    <img src={movies.Poster} alt={movies.Title} />
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero