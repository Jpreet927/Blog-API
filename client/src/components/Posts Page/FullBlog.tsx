import React from "react";
import styled from "styled-components";
import Blog from "../Blog Posts/Blog";
import BlogDetailsWithAvatar from "./BlogDetailsWithAvatar";
import AuthorTag from "../Author/AuthorTag";
import CategoryTag from "../CategoryTag";
import { Post } from "../../ts/types/Post";

type Props = {
    post: Post;
    index: number;
};

type ComponentProps = {
    index: number;
};

const FullBlog = ({ post, index }: Props) => {
    return (
        <Container index={index}>
            <BlogWrapper index={index}>
                <Blog post={post} />
            </BlogWrapper>
            <DetailsWrapper index={index}>
                <Title>{post.title}</Title>
                <Subtitle>
                    {post.content.split(" ").slice(0, 20).join(" ") + "..."}
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
    background-color: ${(props: ComponentProps): string => {
        return props.index % 2 === 1 ? "#F2F2F2" : "#FFFFFF";
    }};
`;

const BlogWrapper = styled.div`
    flex: 1 0 50%;
    order: ${(props: ComponentProps): number => {
        return props.index % 2 === 1 ? 2 : 1;
    }};
`;

const DetailsWrapper = styled.div`
    display: flex;
    flex: 1 0 50%;
    flex-direction: column;
    order: ${(props: ComponentProps): number => {
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
