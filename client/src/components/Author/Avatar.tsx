import React from "react";
import styled from "styled-components";
import DefaultAvatar from "./DefaultAvatar";

type Props = {
    dimensions: string;
    src?: string;
    name: string | undefined;
};

type StyleProps = {
    dimensions: string;
};

const Avatar = ({ dimensions, src, name }: Props) => {
    return (
        <Container dimensions={dimensions}>
            {src ? <Image src={src} /> : <DefaultAvatar name={name} />}
        </Container>
    );
};

const Container = styled.div`
    min-height: ${(props: StyleProps) => props.dimensions};
    min-width: ${(props: StyleProps) => props.dimensions};
    max-height: ${(props: StyleProps) => props.dimensions};
    max-width: ${(props: StyleProps) => props.dimensions};
    overflow: hidden;
    border-radius: 50%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default Avatar;
