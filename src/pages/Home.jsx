import { useState } from "react";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";

function Home() {
    const [movies, setMovies] = useState(data);

    return (
        <div>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} title={"Latest Movie"}/>
            <Form movies={movies} setMovies={setMovies} />
        </div>
    )
}

export default Home