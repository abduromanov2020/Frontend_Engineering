import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home() {

    return (
        <div>
            <Hero />
            <Movies title={"Latest Movie"}/>
        </div>
    )
}

export default Home