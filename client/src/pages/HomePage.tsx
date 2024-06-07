import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Divider from "../components/Divider";
import Blog from "../components/Blog Posts/Blog";
import FullBlog from "../components/Blog Posts/FullBlog";
import { Post } from "../ts/types/Post";
import { NavLink, useLocation } from "react-router-dom";

export const URL = process.env.REACT_APP_API_BASE_URL;

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log(URL);
        const fetchData = async () => {
            try {
                const response = await fetch(URL + "/posts");
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {}
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Hero />
            <Section>
                <Title>Featured Blogs</Title>
                <Divider />
                <FeaturedWrapper>
                    {posts.slice(0, 3).map((post: Post) => (
                        <AllBlogsWrapper>
                            <NavLink
                                to={`/blogs/${post._id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <FullBlog post={post} />
                            </NavLink>
                        </AllBlogsWrapper>
                    ))}
                </FeaturedWrapper>
            </Section>
            <Section>
                <Title>Recent Blogs</Title>
                <Divider />
                <AllBlogsWrapper>
                    {posts.map((post: Post) => (
                        <BlogWrapper>
                            <NavLink
                                to={`/blogs/${post._id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <Blog post={post} />
                                <h2>{post.title}</h2>
                            </NavLink>
                        </BlogWrapper>
                    ))}
                </AllBlogsWrapper>
            </Section>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    color: ${({ theme }) => theme.colours.paragraph};
    padding: 4rem 20rem;

    @media only screen and (max-width: 1500px) {
        padding: 4rem 12rem;
    }

    @media only screen and (max-width: 1200px) {
        padding: 4rem 4rem;
    }

    @media only screen and (max-width: 600px) {
        padding: 4rem 3rem;
    }
`;

const Title = styled.h1`
    font-size: 42px;
`;

const FeaturedWrapper = styled.div`
    display: flex;
    gap: 4rem;
    width: 100%;

    @media only screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const AllBlogsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;
    margin-bottom: 5rem;

    @media only screen and (max-width: 750px) {
        margin-bottom: 0rem;
    }
`;

const BlogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 30%;
    gap: 0.8rem;

    @media only screen and (max-width: 750px) {
        flex: 1 0 40%;
    }

    @media only screen and (max-width: 500px) {
        flex: 1 0 100%;
    }
`;

const FeaturedBlogWrapper = styled.div`
    width: 50%;
`;

export default HomePage;
