import React from "react";
import styled from "styled-components";
import { Post } from "../../ts/types/Post";

const BlogDetails = ({ post }: { post: Post }) => {
    return (
        <Container>
            <Title>{post.title}</Title>
            <Subtitle>
                {post.content.split(" ").slice(0, 20).join(" ") + "..."}
            </Subtitle>
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

export default BlogDetails;
