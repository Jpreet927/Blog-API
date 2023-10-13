import React from "react";
import styled from "styled-components";

interface AvatarProps {
    dimensions: string;
}

const Avatar: React.FC<AvatarProps> = ({ dimensions }) => {
    return (
        <Container dimensions={dimensions}>
            <Image src={require("../../assets/paths-eye.png")} />
        </Container>
    );
};

const Container = styled.div`
    min-height: ${(props: AvatarProps) => props.dimensions};
    min-width: ${(props: AvatarProps) => props.dimensions};
    max-height: ${(props: AvatarProps) => props.dimensions};
    max-width: ${(props: AvatarProps) => props.dimensions};
    overflow: hidden;
    border-radius: 50%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default Avatar;
