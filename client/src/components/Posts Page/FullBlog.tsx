import React from "react";
import styled from "styled-components";
import Blog from "../Blog Posts/Blog";
import BlogDetailsWithAvatar from "./BlogDetailsWithAvatar";
import AuthorTag from "../Author/AuthorTag";
import CategoryTag from "../CategoryTag";

interface Props {
    index: number;
}

const FullBlog: React.FC<Props> = ({ index }) => {
    return (
        <Container index={index}>
            <BlogWrapper index={index}>
                <Blog />
            </BlogWrapper>
            <DetailsWrapper index={index}>
                <Title>Blog Title</Title>
                <Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Subtitle>
                <AuthorTag />
                <TagWrapper>
                    <CategoryTag />
                    <CategoryTag />
                </TagWrapper>
            </DetailsWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    height: 450px;
    padding: 4rem 20rem;
    background-color: ${(props: Props): string => {
        return props.index % 2 === 1 ? "#F2F2F2" : "#FFFFFF";
    }};
`;

const BlogWrapper = styled.div`
    flex: 1 0 50%;
    order: ${(props: Props): number => {
        return props.index % 2 === 1 ? 2 : 1;
    }};
`;

const DetailsWrapper = styled.div`
    display: flex;
    flex: 1 0 50%;
    flex-direction: column;
    order: ${(props: Props): number => {
        return props.index % 2 === 1 ? 1 : 2;
    }};
    color: ${({ theme }) => theme.colours.paragraph};
`;

const TagWrapper = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5em;
`;

const Title = styled.h3`
    font-size: 24px;
`;

const Subtitle = styled.p`
    font-size: 16px;
    font-style: italic;
    line-height: 1.6em;
    margin-bottom: 1.5em;
    color: ${({ theme }) => theme.colours.subtext};
`;

export default FullBlog;
