import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    Button,
    Error,
    Input,
    InputContainer,
    Strong,
    Subtitle,
} from "../Login/LoginForm";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { UserContext } from "../../context/AuthContext";
import { Post } from "../../ts/types/Post";

type EditBlogForm = {
    image: string;
    title: string;
    content: string;
    author: string;
    published: boolean;
};

type Props = {
    setEditBlogFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
    blogDetails: Post;
};

const EditBlogForm = ({ setEditBlogFormVisible, blogDetails }: Props) => {
    const { user } = useContext(UserContext);
    const [submitError, setSubmitError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditBlogForm>();

    const createBlog: SubmitHandler<EditBlogForm> = async (data) => {
        setSubmitted(true);

        try {
            const body = {
                title: data.title,
                content: data.content,
                author: user?._id,
                image: data.image,
                published: false,
            };
            const token = `Bearer ${user?.token}`;

            const response = await fetch(
                `http://localhost:5000/api/posts/${blogDetails._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                    body: JSON.stringify(body),
                }
            );
            const responseData = await response.json();
        } catch (error: any) {
            setSubmitError(error.message);
        }

        setSubmitted(false);
        setEditBlogFormVisible(false);
    };

    return (
        <Form onSubmit={handleSubmit(createBlog)}>
            <ImageContainer>
                <Image src={blogDetails.image} />
            </ImageContainer>
            <FormFieldsContainer>
                <FieldSet disabled={submitted ? true : false}>
                    <HeaderContainer>
                        <h1>Edit Blog Post</h1>
                        <IconContainer
                            onClick={() => setEditBlogFormVisible(false)}
                        >
                            <CloseIcon />
                        </IconContainer>
                    </HeaderContainer>
                    <InputContainer>
                        <label htmlFor="username">Title</label>
                        <Input
                            type="text"
                            placeholder={"Blog title"}
                            defaultValue={blogDetails.title}
                            {...register("title", { required: true })}
                        />
                        {errors.title?.type === "required" && (
                            <Error>Title is required.</Error>
                        )}
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="username">Image</label>
                        <Input
                            type="text"
                            placeholder={"Link to image"}
                            defaultValue={blogDetails.image}
                            {...register("image", { required: true })}
                        />
                        {errors.image?.type === "required" && (
                            <Error>Image is required.</Error>
                        )}
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="email">Content</label>
                        <TextArea
                            placeholder={"Blog post content"}
                            defaultValue={blogDetails.content}
                            {...register("content", { required: true })}
                        />
                        {errors.content?.type === "required" && (
                            <Error>Content is required.</Error>
                        )}
                    </InputContainer>
                    <ButtonContainer>
                        <CancelButton
                            onClick={() => setEditBlogFormVisible(false)}
                        >
                            Cancel
                        </CancelButton>
                        <Button type="submit">Submit</Button>
                    </ButtonContainer>
                    {submitError && <Error>{submitError}</Error>}
                </FieldSet>
            </FormFieldsContainer>
        </Form>
    );
};

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 450px;
    overflow: hidden;
    background-color: #ffffffa7;
    backdrop-filter: blur(40px);
    border-radius: 1rem;
`;

const ImageContainer = styled.div`
    height: 125px;
    width: 100%;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const FormFieldsContainer = styled.div`
    padding: 0px 32px 32px 32px;
`;

const TextArea = styled.textarea`
    border: none;
    padding: 12px 24px;
    width: 100%;
    height: 200px;
    background-color: #ffffff;
    font-family: "Inter", sans-serif;
    border-radius: 10px;
    max-width: 100%;
    resize: none;
`;

const FieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

const CancelButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
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
    align-items: center;
`;

export default EditBlogForm;
