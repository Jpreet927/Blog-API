import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

type LoginForm = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<LoginForm>();

    const submitForm: SubmitHandler<LoginForm> = (data) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <h1>Login</h1>
            <InputContainer>
                <label htmlFor="email">Username</label>
                <Input
                    type="text"
                    placeholder={"Email"}
                    {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                    <Error>Email is required.</Error>
                )}
            </InputContainer>
            <InputContainer>
                <label htmlFor="password">Password</label>
                <Input
                    type="password"
                    placeholder={"Password"}
                    {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && (
                    <Error>Password is required.</Error>
                )}
            </InputContainer>
            <Button type="submit">Login</Button>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 450px;
    padding: 32px;
    background-color: #ffffffa7;
    backdrop-filter: blur(40px);
    border-radius: 1rem;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
`;

const Input = styled.input`
    border: none;
    padding: 12px 24px;
    width: 100%;
    background-color: #ffffff;
    font-family: "Inter", sans-serif;
    border-radius: 100px;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
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

const Error = styled.p`
    color: red;
    font-family: "Inter", sans-serif;
    font-size: 12px;
`;

export default LoginForm;
