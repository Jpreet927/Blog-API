import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "../components/Author/Avatar";
import Divider from "../components/Divider";

const AboutPage = () => {
    return (
        <Container>
            <ContentWrapper>
                <LeftWrapper>
                    <ProfileWrapper>
                        {/* <Avatar dimensions="60px" /> */}
                        <Title>Jaipreet Singh</Title>
                    </ProfileWrapper>
                    <Subtext>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                    </Subtext>
                    <LinksWrapper>
                        <TwitterIcon />
                        <LinkedInIcon />
                        <GitHubIcon />
                        <PersonIcon />
                    </LinksWrapper>
                </LeftWrapper>
                <RightWrapper>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </Paragraph>
                </RightWrapper>
            </ContentWrapper>
            <DividerWrapper>
                <Divider />
            </DividerWrapper>
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    background-color: ${({ theme }) => theme.colours.bgMed};
    color: ${({ theme }) => theme.colours.bgDark};
`;

const ContentWrapper = styled.div`
    display: flex;
    gap: 4rem;
    width: 66%;

    @media only screen and (max-width: 1200px) {
        width: 80%;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        gap: 2rem;
    }

    @media only screen and (max-width: 600px) {
        padding: 10rem 0rem 0rem 0rem;
    }
`;

const DividerWrapper = styled.div`
    display: flex;
    gap: 4rem;
    width: 66%;

    @media only screen and (max-width: 1200px) {
        width: 80%;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        gap: 2rem;
    }

    @media only screen and (max-width: 600px) {
        padding: 0rem 0rem 10rem 0rem;
    }
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 34%;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`;

const RightWrapper = styled.div`
    width: 66%;
    column-count: 2;
    column-gap: 4rem;

    @media only screen and (max-width: 900px) {
        width: 100%;
        column-gap: 1rem;
    }

    @media only screen and (max-width: 600px) {
        column-count: 1;
    }
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: 42px;
`;

const Subtext = styled.p`
    font-size: 14px;
    font-style: italic;
    color: ${({ theme }) => theme.colours.subtext};
    line-height: 1.8em;
`;

const Paragraph = styled.p`
    line-height: 1.8em;
    font-size: 16px;
`;

const LinksWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export default AboutPage;
