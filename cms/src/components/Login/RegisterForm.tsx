import React from "react";
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

type RegisterForm = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type Props = {
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm = ({ setRegister }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>();

    const passwordConfirmed = (password: string, confirm: string) => {
        console.log(errors.confirmPassword);
        return password === confirm;
    };

    const submitForm: SubmitHandler<RegisterForm> = (data) => {
        console.log(errors.confirmPassword);
        console.log(data);
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
                                formValues.confirmPassword
                            ),
                    })}
                />
                {errors.password?.type === "required" && (
                    <Error>Password is required.</Error>
                )}
            </InputContainer>
            <InputContainer>
                <label htmlFor="password">Confirm Password</label>
                <Input
                    type="password"
                    placeholder={"Password"}
                    {...register("confirmPassword", {
                        required: true,
                        validate: (value, formValues) =>
                            passwordConfirmed(value, formValues.password),
                    })}
                />
                {errors.confirmPassword?.type === "required" && (
                    <Error>Confirm password is required.</Error>
                )}
                {errors.confirmPassword?.type === "validate" && (
                    <Error>Passwords are not the same.</Error>
                )}
            </InputContainer>
            <Button type="submit">Register</Button>
            <Subtitle>
                Already have an account?{" "}
                <Strong onClick={() => setRegister(true)}>Login.</Strong>
            </Subtitle>
        </Form>
    );
};

export default RegisterForm;
