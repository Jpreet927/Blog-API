import React from "react";
import styled from "styled-components";

interface AvatarProps {
    dimensions: string;
}

const Avatar: React.FC<AvatarProps> = ({ dimensions }) => {
    return (
        <Container dimensions={dimensions}>
            <Image src={require("../assets/paths-eye.png")} />
        </Container>
    );
};

const Container = styled.div`
    height: ${(props: AvatarProps) => props.dimensions};
    width: auto;
    overflow: hidden;
    border-radius: 50%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default Avatar;
