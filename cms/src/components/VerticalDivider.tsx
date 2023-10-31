import React from "react";
import styled from "styled-components";

const VerticalDivider = () => {
    return <StyledDivider />;
};

const StyledDivider = styled.div`
    height: 40px;
    width: 1px;
    background-color: ${({ theme }) => theme.colours.bgDark};
`;

export default VerticalDivider;
