import React, { useState } from "react";
import styled from "styled-components";
import { Post } from "../../ts/types/Post";
import DeleteIcon from "@mui/icons-material/Delete";
import FormContainer from "./FormContainer";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

type Props = {
    post: Post;
    setEditBlogFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const BlogDetails = ({ post, setEditBlogFormVisible }: Props) => {
    const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);

    return (
        <>
            <Container>
                <TitleContainer>
                    <Title>{post.title}</Title>
                    <ButtonContainer>
                        <Button onClick={() => setEditBlogFormVisible(true)}>
                            Edit
                        </Button>
                        <DeleteButton
                            onClick={() => setConfirmDeleteVisible(true)}
                        >
                            <DeleteIcon />
                        </DeleteButton>
                    </ButtonContainer>
                </TitleContainer>
                <Subtitle>
                    {post.content.split(" ").slice(0, 20).join(" ") + "..."}
                </Subtitle>
            </Container>
            {confirmDeleteVisible && (
                <FormContainer>
                    <ConfirmDeleteModal
                        setConfirmDeleteVisible={setConfirmDeleteVisible}
                        blogDetails={post}
                    />
                </FormContainer>
            )}
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0;
    color: ${({ theme }) => theme.colours.paragraph};
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 24px;
`;

const Subtitle = styled.p`
    font-size: 16px;
    font-style: italic;
    line-height: 1.6em;
    color: ${({ theme }) => theme.colours.subtext};
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-radius: 100px;
    border: none;
    background-color: #3f3f3f;
    color: #ffffff;
    font-weight: 700;
    transition: background-color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
`;

export const DeleteButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 100px;
    border: none;
    background-color: #3f3f3f;
    color: #ffffff;
    font-weight: 700;
    transition: background-color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: #dd3939;
    }
`;

export default BlogDetails;
