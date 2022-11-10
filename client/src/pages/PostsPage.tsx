import React from "react";
import styled from "styled-components";
import Divider from "../components/Divider";
import FullBlog from "../components/Posts Page/FullBlog";

const PostsPage = () => {
    const arr: Array<number> = [1, 2, 3, 4, 5];

    return (
        <Container>
            <TitleWrapper>
                <Title>All Blogs</Title>
                <Divider />
            </TitleWrapper>
            <PostsWrapper>
                {arr.map((element: number, index: number) => (
                    <FullBlog index={index} />
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
