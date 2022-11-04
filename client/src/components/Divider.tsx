import React from "react";
import styled from "styled-components";

const Divider = () => {
    return <StyledDivider />;
};

const StyledDivider = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colours.bgDark};
`;

export default Divider;
