import styled from "styled-components";

const StyledMovie = styled.div`
    margin-bottom: 1rem;

    img {
        border-radius: 2rem;
        max-width: 100%;
    }

    @media screen and (min-width: 768px) {
        flex-basis: 50%;

    }
    @media screen and (min-width: 768px) {
        padding: 1rem;
        flex-basis: 25%;
    }
}
`;

export default StyledMovie;
