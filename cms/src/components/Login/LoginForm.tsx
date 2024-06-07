import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/AuthContext";
import { URL } from "../../pages/HomePage";

type LoginForm = {
    email: string;
    password: string;
};

type Props = {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
    notify: (message: string) => void;
};

const LoginForm = ({ setLogin, notify }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();
    const [loginError, setLoginError] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const submitForm: SubmitHandler<LoginForm> = async (data) => {
        try {
            const response = await fetch(URL + "/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            setUser({ ...responseData.user, token: responseData.token });
            notify("Successfully logged in!");
            navigate("/");
        } catch (error: any) {
            setLoginError(error.message);
        }
    };

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <h1>Login</h1>
            <InputContainer>
                <label htmlFor="email">Email</label>
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
            {loginError && <Error>{loginError}</Error>}
            <Subtitle>
                Don't have an account?{" "}
                <Strong onClick={() => setLogin(false)}>Sign Up</Strong>
            </Subtitle>
        </Form>
    );
};

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 450px;
    padding: 32px;
    background-color: #ffffffa7;
    backdrop-filter: blur(40px);
    border-radius: 1rem;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
`;

export const Input = styled.input`
    border: none;
    padding: 12px 24px;
    width: 100%;
    background-color: #ffffff;
    font-family: "Inter", sans-serif;
    border-radius: 100px;
`;

export const Button = styled.button`
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

export const Error = styled.p`
    color: red;
    font-family: "Inter", sans-serif;
    font-size: 12px;
`;

export const Subtitle = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 16px;
`;

export const Strong = styled.strong`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    cursor: pointer;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        background-color: #3f3f3f;
        height: 1px;
        width: 0;
        left: 0;
        bottom: -5px;
        transition: 0.4s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

export default LoginForm;
