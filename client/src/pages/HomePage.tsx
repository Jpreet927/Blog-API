import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Divider from "../components/Divider";
import Blog from "../components/Blog Posts/Blog";
import FullBlog from "../components/Blog Posts/FullBlog";

const HomePage = () => {
    return (
        <Container>
            <Hero />
            <Section>
                <Title>Featured Blogs</Title>
                <Divider />
                <FeaturedWrapper>
                    <FullBlog />
                    <FullBlog />
                </FeaturedWrapper>
            </Section>
            <Section>
                <Title>All Blogs</Title>
                <Divider />
                <AllBlogsWrapper>
                    <BlogWrapper>
                        <Blog />
                        <h2>Blog Title</h2>
                    </BlogWrapper>
                    <BlogWrapper>
                        <Blog />
                        <h2>Blog Title</h2>
                    </BlogWrapper>
                    <BlogWrapper>
                        <Blog />
                        <h2>Blog Title</h2>
                    </BlogWrapper>
                    <BlogWrapper>
                        <Blog />
                        <h2>Blog Title</h2>
                    </BlogWrapper>
                    <BlogWrapper>
                        <Blog />
                        <h2>Blog Title</h2>
                    </BlogWrapper>
                    <BlogWrapper>
                        <Blog />
                        <h2>Blog Title</h2>
                    </BlogWrapper>
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
`;

const Title = styled.h1`
    font-size: 42px;
`;

const FeaturedWrapper = styled.div`
    display: flex;
    gap: 4rem;
    width: 100%;
`;

const AllBlogsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;
    margin-bottom: 5rem;
`;

const BlogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 30%;
    gap: 0.8rem;
`;

export default HomePage;
