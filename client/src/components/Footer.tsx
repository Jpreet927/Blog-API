import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <Title>Jaipreet Singh</Title>
            <Links>
                <Link>Help</Link>
                <Link>Terms of Service</Link>
                <Link>Privacy</Link>
                <Link>About</Link>
            </Links>
        </Container>
    );
};

const Container = styled.div`
    padding: 4rem 6rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colours.bgDark};
`;

const Title = styled.h3`
    font-size: 1.4em;
`;

const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 33%;
`;

const Link = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 14px;
`;

export default Footer;
