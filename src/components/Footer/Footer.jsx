import styled from "styled-components";

function Footer() {

    const StyledFooter = styled.footer`
        background-color: #d5bdaf;
        padding: 1rem;
        color: #2b2d42;
        text-align: center;
    `

    return (
        <StyledFooter>
            <h2>Movie App</h2>
            <p>Created by Alfatih</p>
        </StyledFooter>
    );
}

export default Footer;