import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const AuthorTag = () => {
    return (
        <Container>
            <Avatar dimensions="50px" />
            <TextWrapper>
                <Name>Jaipreet Singh</Name>
                <Date>August 24th, 2022</Date>
            </TextWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.p`
    color: ${({ theme }) => theme.colours.paragraph};
`;

const Date = styled.p`
    color: ${({ theme }) => theme.colours.subtext};
`;

export default AuthorTag;
