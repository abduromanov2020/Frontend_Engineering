import { Link } from "react-router-dom"
import styled from "styled-components"

function Navbar() {
    const StyledNavbar = styled.div`
        background-color: #d5bdaf;
        padding: 1rem;
        color: #2b2d42;

        nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        h1 {
            margin-bottom: 1rem;
        }

        ul {
            list-style: none;
        }

        li {
            margin-bottom: 1rem;
        }

        a {
            color: #2b2d42;
            text-decoration: none;
        }

        @media screen and (min-width: 768px) {
            nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            h1 {
                margin-bottom: 0;
            }

            ul {
                display: flex;
            }

            li {
                margin: 0 1rem;
            }
        }
    `

    return (
        <StyledNavbar>
            <nav>
                <div>
                    <h1>Movie App</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movie/add">Add Movie</Link>
                        </li>
                        <li>
                            <Link to="/movie/popular">Popular</Link>
                        </li>
                        <li>
                            <Link to="/movie/now">Now Playing</Link>
                        </li>
                        <li>
                            <Link to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </StyledNavbar>
    )
}

export default Navbar