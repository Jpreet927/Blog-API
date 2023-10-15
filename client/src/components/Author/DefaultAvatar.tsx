import React from "react";
import styled from "styled-components";

type Props = {
    name: string | undefined;
};

const DefaultAvatar = ({ name }: Props) => {
    return (
        <Container>
            <Initials>
                {name
                    ?.split(" ")
                    .map((str) => str.slice(0, 1))
                    .join("")}
            </Initials>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #374e85;
`;

const Initials = styled.p`
    font-weight: 700;
    color: #ffffff;
`;

export default DefaultAvatar;
