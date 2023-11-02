import React, { useEffect, useContext, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { UserContext } from "../context/AuthContext";
import { Post } from "../ts/types/Post";
import styled from "styled-components";
import Divider from "../components/Divider";
import FullBlog from "../components/Blogs/FullBlog";

const AllPostsPage = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 100);

    useEffect(() => {
        const fetchAuthorPosts = async () => {
            const response = await fetch(`http://localhost:5000/api/posts/`);

            const data = await response.json();
            setPosts(data.posts);
        };

        fetchAuthorPosts();
    }, [user]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filterPosts = (post: Post) => {
        if (
            post.title.toLowerCase().includes(debouncedSearch) ||
            post.content.toLowerCase().includes(debouncedSearch) ||
            post.author.toLowerCase().includes(debouncedSearch)
        ) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <Container>
            <Section>
                <Title>All Blog Posts</Title>
                <Divider />
                <Input
                    type="text"
                    placeholder="Search for a blog..."
                    value={search}
                    onChange={(e) => handleSearch(e)}
                />
                <AllBlogsWrapper>
                    {posts
                        ?.filter((post: Post) => filterPosts(post))
                        .map((post: Post) => (
                            <BlogWrapper>
                                <FullBlog post={post} />
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
    padding: 5rem 0rem;
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

const Title = styled.h1`
    font-size: 42px;
`;

const AllBlogsWrapper = styled.div`
    display: flex;
    flex-direction: column;
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

export const Input = styled.input`
    border: none;
    padding: 12px 24px;
    width: 100%;
    background-color: #ededed;
    font-family: "Inter", sans-serif;
    border-radius: 100px;
`;

export default AllPostsPage;
