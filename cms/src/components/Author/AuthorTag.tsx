import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { User } from "../../ts/types/User";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";
import { URL } from "../../pages/HomePage";

type Props = {
    authorId: string | undefined;
    date: string | undefined;
};

const AuthorTag = ({ authorId, date }: Props) => {
    const [author, setAuthor] = useState<User | null>(null);

    useEffect(() => {
        const fetchAuthorData = async () => {
            if (authorId) {
                const response = await fetch(URL + `/users/${authorId}`);
                const data = await response.json();

                setAuthor(data.user);
            }
        };

        if (authorId) fetchAuthorData();
    }, [authorId]);

    return (
        <Container>
            <NavLink to={`/`} style={{ textDecoration: "none" }}>
                <Avatar
                    dimensions="50px"
                    src={author?.avatar}
                    name={author?.username}
                />
            </NavLink>
            <TextWrapper>
                <Name>{author?.username}</Name>
                <Moment format="MMMM Do, YYYY">{date}</Moment>
            </TextWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.p`
    color: ${({ theme }) => theme.colours.paragraph};
`;

export default AuthorTag;
