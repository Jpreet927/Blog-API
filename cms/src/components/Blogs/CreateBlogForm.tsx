import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    Button,
    Error,
    Form,
    Input,
    InputContainer,
    Strong,
    Subtitle,
} from "../Login/LoginForm";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { UserContext } from "../../context/AuthContext";

type CreateBlogForm = {
    title: string;
    content: string;
    author: string;
    published: boolean;
};

type Props = {
    setCreateBlogFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateBlogForm = ({ setCreateBlogFormVisible }: Props) => {
    const { user } = useContext(UserContext);
    const [submitError, setSubmitError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateBlogForm>();

    const createBlog: SubmitHandler<CreateBlogForm> = async (data) => {
        setSubmitted(true);

        try {
            const body = {
                title: data.title,
                content: data.content,
                author: user?._id,
                published: false,
            };
            const token = `Bearer ${user?.token}`;

            const response = await fetch("http://localhost:5000/api/posts/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(body),
            });
            const responseData = await response.json();
        } catch (error: any) {
            setSubmitError(error.message);
        }

        setSubmitted(false);
        setCreateBlogFormVisible(false);
    };

    return (
        <Form onSubmit={handleSubmit(createBlog)}>
            <fieldset disabled={submitted ? true : false}>
                <HeaderContainer>
                    <h1>Create a Blog Post</h1>
                    <IconContainer
                        onClick={() => setCreateBlogFormVisible(false)}
                    >
                        <CloseIcon />
                    </IconContainer>
                </HeaderContainer>
                <InputContainer>
                    <label htmlFor="username">Title</label>
                    <Input
                        type="text"
                        placeholder={"Blog title"}
                        {...register("title", { required: true })}
                    />
                    {errors.title?.type === "required" && (
                        <Error>Title is required.</Error>
                    )}
                </InputContainer>
                <InputContainer>
                    <label htmlFor="email">Content</label>
                    <TextArea
                        placeholder={"Blog post content"}
                        {...register("content", { required: true })}
                    />
                    {errors.content?.type === "required" && (
                        <Error>Content is required.</Error>
                    )}
                </InputContainer>
                <Button type="submit">Submit</Button>
                {submitError && <Error>{submitError}</Error>}
            </fieldset>
        </Form>
    );
};

const TextArea = styled.textarea`
    border: none;
    padding: 12px 24px;
    width: 100%;
    height: 300px;
    background-color: #ffffff;
    font-family: "Inter", sans-serif;
    border-radius: 10px;
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

export default CreateBlogForm;
