import React, { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Login/RegisterForm";
import styled from "styled-components";
import bgImage from "../assets/bg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
    // true -> login, false -> register
    const [loginOrRegister, setLoginOrRegister] = useState(true);

    const notify = (message: string) => {
        toast(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    };

    return (
        <Container>
            {loginOrRegister ? (
                <LoginForm setLogin={setLoginOrRegister} notify={notify} />
            ) : (
                <RegisterForm
                    setRegister={setLoginOrRegister}
                    notify={notify}
                />
            )}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
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
