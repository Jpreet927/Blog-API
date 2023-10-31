import React, { ReactNode } from "react";
import styled from "styled-components";

const FormContainer = ({ children }: { children: ReactNode }) => {
    return <Container>{children}</Container>;
};

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(40px);
    justify-content: center;
    align-items: center;
`;

export default FormContainer;
