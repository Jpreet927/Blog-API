import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "./Author/Avatar";

const Hero = () => {
    return (
        <Container>
            <ContentWrapper>
                <Heading>
                    <Avatar dimensions="125px" />
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
                <BottomWrapper>
                    <Button>Start Reading</Button>
                    <LinksWrapper>
                        <TwitterIcon />
                        <LinkedInIcon />
                        <GitHubIcon />
                        <PersonIcon />
                    </LinksWrapper>
                </BottomWrapper>
            </ContentWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 80vh; */
    padding: 10rem 0rem;
    background-color: ${({ theme }) => theme.colours.bgMed};
    color: ${({ theme }) => theme.colours.bgDark};

    @media only screen and (max-width: 600px) {
        padding: 6rem 0rem;
    }
`;

const ContentWrapper = styled.div`
    padding: 4rem 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;

    @media only screen and (max-width: 1500px) {
        padding: 4rem 12rem;
    }

    @media only screen and (max-width: 1200px) {
        padding: 4rem 8rem;
    }
`;

const Heading = styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    gap: 2rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
    }
`;

const Description = styled.p`
    line-height: 1.8em;
    font-size: 16px;
`;

const Title = styled.h1`
    font-size: 64px;

    @media only screen and (max-width: 900px) {
        font-size: 48px;
    }

    @media only screen and (max-width: 600px) {
        font-size: 36px;
    }
`;

const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.colours.bgDark};
    background: none;
    transition: background-color 0.4s ease, color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colours.bgDark};
        color: white;
    }
`;

const LinksWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export default Hero;
