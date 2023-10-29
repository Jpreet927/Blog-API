import React from "react";
import styled from "styled-components";

const CategoryTag = () => {
    return (
        <Container>
            <Title>Design</Title>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 1.8rem;
    background: none;
    border: 1px solid ${({ theme }) => theme.colours.bgDark};
    border-radius: 50px;
`;

const Title = styled.p`
    font-size: 12px;
    font-family: "Lato", sans-serif;
`;

export default CategoryTag;
