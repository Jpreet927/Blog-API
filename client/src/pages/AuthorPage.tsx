import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { User } from "../ts/types/User";
import { Post } from "../ts/types/Post";
import Divider from "../components/Divider";
import Blog from "../components/Blog Posts/Blog";
import FullBlog from "../components/Blog Posts/FullBlog";
import Avatar from "../components/Author/Avatar";

const AuthorPage = () => {
    const { authorid } = useParams();
    const [author, setAuthor] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[] | null>(null);

    useEffect(() => {
        const fetchAuthorData = async () => {
            if (authorid) {
                const response = await fetch(
                    `http://localhost:5000/api/users/${authorid}`
                );

                const data = await response.json();
                setAuthor(data.user);
            }
        };

        if (authorid) fetchAuthorData();
    }, [authorid]);

    useEffect(() => {
        const fetchAuthorPosts = async () => {
            if (authorid) {
                const response = await fetch(
                    `http://localhost:5000/api/posts/author/${authorid}`
                );

                const data = await response.json();
                setPosts(data.posts);
            }
        };

        if (authorid) fetchAuthorPosts();
    }, [authorid]);

    return (
        <Container>
            <Banner $bgimage={posts ? posts[0].image : ""}>
                <BannerOverlay />
                <AuthorDataContainer>
                    <Avatar dimensions="100px" name={author?.username} />
                    <Title>{author?.username}</Title>
                </AuthorDataContainer>
            </Banner>
            <Section>
                <Title>{`${author?.username}'s Blogs`}</Title>
                <Divider />
                <AllBlogsWrapper>
                    {posts?.map((post: Post) => (
                        <BlogWrapper>
                            <NavLink
                                to={`/blogs/${post._id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <FullBlog post={post} />
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
        padding: 4rem 6rem;
    }

    @media only screen and (max-width: 600px) {
        padding: 4rem 3rem;
    }
`;

const Banner = styled.div<{ $bgimage?: string }>`
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    background-image: url(${(props) => props.$bgimage});
    background-color: #dadada;
    background-position: center;
    background-size: cover;
    position: relative;
`;

const BannerOverlay = styled.div`
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    background-color: #ffffff;
    opacity: 85%;
    position: absolute;
    top: 0;
    left: 0;
`;

const AuthorDataContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    z-index: 10;
`;

const Title = styled.h1`
    font-size: 42px;
`;

const AllBlogsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;
    margin-bottom: 5rem;

    @media only screen and (max-width: 750px) {
        gap: 1rem;
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
`;

export default AuthorPage;
