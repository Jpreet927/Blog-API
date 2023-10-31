import React from "react";
import styled from "styled-components";
import { Post } from "../../ts/types/Post";
import { NavLink } from "react-router-dom";

const Blog = ({ post }: { post: Post }) => {
    return (
        <NavLink to={`/post/${post._id}`} style={{ textDecoration: "none" }}>
            <Container>
                <Image src={post.image} />
            </Container>
        </NavLink>
    );
};

const Container = styled.div`
    aspect-ratio: 5 / 3;
    overflow: hidden;
    border-radius: 30px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`;

const Image = styled.img`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
`;

export default Blog;
