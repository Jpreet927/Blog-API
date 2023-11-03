import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Divider from "../components/Divider";
import FullBlog from "../components/Posts Page/FullBlog";
import { Post } from "../ts/types/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const URL = process.env.API_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/posts");
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                // setError(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <TitleWrapper>
                <Title>All Blogs</Title>
                <Divider />
            </TitleWrapper>
            <PostsWrapper>
                {posts.map((post: Post, index: number) => (
                    <FullBlog post={post} index={index} />
                ))}
            </PostsWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 10rem 18rem 2rem 18rem;

    @media only screen and (max-width: 1200px) {
        padding: 10rem 6rem 2rem 6rem;
    }

    @media only screen and (max-width: 600px) {
        padding: 10rem 3rem 2rem 3rem;
    }
`;

const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 42px;
    color: ${({ theme }) => theme.colours.paragraph};
`;

export default PostsPage;
