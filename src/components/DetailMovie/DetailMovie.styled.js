import styled from "styled-components";

const StyledDetailMovie = styled.div`
  // Mobile Screen
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
            max-width: 100%;
            height: auto;
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

        .poster {
      flex-basis: 30%;
    }
    .info {
      flex-basis: 60%;
    }
`;

export default StyledDetailMovie;
