import React from "react";
import styled from "styled-components";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import CategoryTag from "../CategoryTag";
import { Post } from "../../ts/types/Post";

const FullBlog = ({ post }: { post: Post }) => {
    return (
        <Container>
            <Blog post={post} />
            <BlogDetails />
            <TagWrapper>
                <CategoryTag />
                <CategoryTag />
            </TagWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const TagWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export default FullBlog;
