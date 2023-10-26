import React, { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Login/RegisterForm";
import styled from "styled-components";
import bgImage from "../assets/bg.jpg";

const LoginPage = () => {
    // true -> login, false -> register
    const [loginOrRegister, setLoginOrRegister] = useState(true);

    return (
        <Container>
            {loginOrRegister ? <LoginForm /> : <RegisterForm />}
        </Container>
    );
};

const Container = styled.div`
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default LoginPage;
