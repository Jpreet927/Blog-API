import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/AuthContext";
import { Post } from "../ts/types/Post";
import styled from "styled-components";
import Divider from "../components/Divider";
import Avatar from "../components/Author/Avatar";
import { NavLink } from "react-router-dom";
import FullBlog from "../components/Blogs/FullBlog";

const HomePage = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState<Post[] | null>(null);

    useEffect(() => {
        const fetchAuthorPosts = async () => {
            if (user?._id) {
                const response = await fetch(
                    `http://localhost:5000/api/posts/author/${user._id}`
                );

                const data = await response.json();
                setPosts(data.posts);
            }
        };

        if (user?._id) fetchAuthorPosts();
    }, [user]);

    return (
        <Container>
            <Banner $bgimage={posts && posts?.length > 0 ? posts[0].image : ""}>
                <AuthorDataContainer>
                    <Avatar dimensions="100px" name={user?.username} />
                    <Title>{user?.username}</Title>
                </AuthorDataContainer>
            </Banner>
            <Section>
                <Title>{`${user?.username}'s Blogs`}</Title>
                <Divider />
                <AllBlogsWrapper>
                    {posts?.map((post: Post, index: number) => (
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
    background-color: #dadada;
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    background-image: ${(props) => props.$bgimage};
`;

const AuthorDataContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
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

export default HomePage;
