import React, { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    Button,
    Error,
    Form,
    Input,
    InputContainer,
    Strong,
    Subtitle,
} from "./LoginForm";
import { UserContext } from "../../context/AuthContext";

type RegisterForm = {
    username: string;
    email: string;
    password: string;
    "confirm-password": string;
};

type Props = {
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
    notify: (message: string) => void;
};

const RegisterForm = ({ setRegister, notify }: Props) => {
    const [registerError, setRegisterError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>();

    const passwordConfirmed = (password: string, confirm: string) => {
        return password === confirm;
    };

    const submitForm: SubmitHandler<RegisterForm> = async (data) => {
        try {
            const response = await fetch(URL + "/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            notify("Successfully registered!");
            setRegister(true);
        } catch (error: any) {
            setRegisterError(error.message);
        }
    };

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <h1>Register</h1>
            <InputContainer>
                <label htmlFor="username">Username</label>
                <Input
                    type="text"
                    placeholder={"Username"}
                    {...register("username", { required: true })}
                />
                {errors.username?.type === "required" && (
                    <Error>Username is required.</Error>
                )}
            </InputContainer>
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
                    {...register("password", {
                        required: true,
                        validate: (value, formValues) =>
                            passwordConfirmed(
                                value,
                                formValues["confirm-password"]
                            ),
                    })}
                />
                {errors.password?.type === "required" && (
                    <Error>Password is required.</Error>
                )}
            </InputContainer>
            <InputContainer>
                <label htmlFor="confirm-password">Confirm Password</label>
                <Input
                    type="password"
                    placeholder={"Confirm Password"}
                    {...register("confirm-password", {
                        required: true,
                        validate: (value, formValues) =>
                            passwordConfirmed(value, formValues.password),
                    })}
                />
                {errors["confirm-password"]?.type === "required" && (
                    <Error>Confirm password is required.</Error>
                )}
                {errors["confirm-password"]?.type === "validate" && (
                    <Error>Passwords are not the same.</Error>
                )}
            </InputContainer>
            <Button type="submit">Register</Button>
            {registerError && <Error>{registerError}</Error>}
            <Subtitle>
                Already have an account?{" "}
                <Strong onClick={() => setRegister(true)}>Login.</Strong>
            </Subtitle>
        </Form>
    );
};

export default RegisterForm;
