import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "./Avatar";

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
    height: 75vh;
    background-color: ${({ theme }) => theme.colours.bgMed};
    color: ${({ theme }) => theme.colours.bgDark};
`;

const ContentWrapper = styled.div`
    /* height: 40%; */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
`;

const Heading = styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    gap: 2rem;
    line-height: 0;
`;

const Description = styled.p`
    line-height: 1.8em;
    font-size: 16px;
`;

const Title = styled.h1`
    font-size: 64px;
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
