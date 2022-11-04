import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const Hero = () => {
    return (
        <Container>
            <ContentWrapper>
                <Heading>
                    <Avatar dimensions="100px" />
                    <Title>Jaipreet Singh Blog</Title>
                </Heading>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Description>
            </ContentWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    background-color: ${({ theme }) => theme.colours.bgMed};
    color: ${({ theme }) => theme.colours.bgDark};
`;

const ContentWrapper = styled.div`
    height: 40%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Heading = styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Description = styled.p`
    line-height: 1.2em;
`;

const Title = styled.h1`
    font-size: 3em;
`;

export default Hero;
