import React, { useContext, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { UserContext } from "../../context/AuthContext";
import { Post } from "../../ts/types/Post";

type Props = {
    setConfirmDeleteVisible: React.Dispatch<React.SetStateAction<boolean>>;
    blogDetails: Post;
};

const ConfirmDeleteModal = ({
    setConfirmDeleteVisible,
    blogDetails,
}: Props) => {
    const { user } = useContext(UserContext);
    const [deleteError, setDeleteError] = useState("");

    const deleteBlogPost = async () => {
        try {
            const token = `Bearer ${user?.token}`;
            const response = await fetch(
                `http://localhost:5000/api/posts/${blogDetails._id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            );

            setConfirmDeleteVisible(false);
        } catch (error: any) {
            setDeleteError(error.message);
        }
    };

    return (
        <Container>
            <HeaderContainer>
                <h1>Confirm Post Deletion</h1>
                <IconContainer onClick={() => setConfirmDeleteVisible(false)}>
                    <CloseIcon />
                </IconContainer>
            </HeaderContainer>
            <p>Are you sure you want to delete this post?</p>
            <ButtonContainer>
                <Button onClick={deleteBlogPost}>Yes</Button>
                <CancelButton onClick={() => setConfirmDeleteVisible(false)}>
                    No
                </CancelButton>
            </ButtonContainer>
        </Container>
    );
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 32px;
    width: 450px;
    overflow: hidden;
    background-color: #ffffffa7;
    backdrop-filter: blur(40px);
    border-radius: 1rem;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IconContainer = styled.div`
    border-radius: 100px;
    padding: 4px;
    height: 35px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 100ms linear;

    &:hover {
        background-color: #dbdbdb;
        cursor: pointer;
    }
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    border-radius: 100px;
    border: none;
    background-color: #3f3f3f;
    color: white;
    font-weight: 700;
    font-size: 12px;
    transition: background-color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: #dd3939;
        color: white;
    }
`;

const CancelButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    border-radius: 100px;
    border: 1px solid #3f3f3f;
    background-color: none;
    color: #3f3f3f;
    font-weight: 700;
    font-size: 12px;
    transition: background-color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: #3f3f3f;
        color: white;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`;

export default ConfirmDeleteModal;
