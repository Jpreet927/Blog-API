import React from "react";
import styled from "styled-components";
import Blog from "../Blog Posts/Blog";
import AuthorTag from "../Author/AuthorTag";

const BlogDetailsWithAvatar = () => {
    return (
        <Container>
            <Title>Blog Title</Title>
            <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Subtitle>
            <AuthorTag authorId={undefined} date={undefined} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    color: ${({ theme }) => theme.colours.paragraph};
`;

const Title = styled.h3`
    font-size: 24px;
`;

const Subtitle = styled.p`
    font-size: 16px;
    font-style: italic;
    line-height: 1.6em;
    color: ${({ theme }) => theme.colours.subtext};
`;

export default BlogDetailsWithAvatar;
