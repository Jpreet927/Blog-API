import React from "react";
import styled from "styled-components";

const Blog = () => {
    return (
        <Container>
            <Image src={require("../../assets/placeholder.jpg")} />
        </Container>
    );
};

const Container = styled.div`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    overflow: hidden;
    border-radius: 50px;
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
