import React from "react";
import styled from "styled-components";
import { Post } from "../../ts/types/Post";

type Props = {
    post: Post;
    setEditBlogFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const BlogDetails = ({ post, setEditBlogFormVisible }: Props) => {
    return (
        <Container>
            <TitleContainer>
                <Title>{post.title}</Title>
                <Button onClick={() => setEditBlogFormVisible(true)}>
                    Edit
                </Button>
            </TitleContainer>
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

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-radius: 100px;
    border: none;
    background-color: #3f3f3f;
    color: #ffffff;
    font-weight: 700;
    transition: background-color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
`;

export default BlogDetails;
