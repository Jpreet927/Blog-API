import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    let linkStyle = {
        textDecoration: "none",
        color: "#3F3F3F",
    };

    let activeLinkStyle = {
        textDecoration: "none",
        color: "#3F3F3F",
        fontWeight: "700",
    };

    return (
        <Container>
            <Title>Jaipreet Blog</Title>
            <NavList>
                <NavItem>
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? activeLinkStyle : linkStyle
                        }
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        to="/blogs"
                        style={({ isActive }) =>
                            isActive ? activeLinkStyle : linkStyle
                        }
                    >
                        Blogs
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        to="/about"
                        style={({ isActive }) =>
                            isActive ? activeLinkStyle : linkStyle
                        }
                    >
                        About
                    </NavLink>
                </NavItem>
            </NavList>
            <Button>Join The Blog</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 2rem 6rem;
`;

const Title = styled.h3`
    font-size: 1.4em;
    color: ${({ theme }) => theme.colours.paragraph};
`;

const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 25%;
`;

const NavItem = styled.li`
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.colours.bgDark};
    position: relative;

    &:hover {
        cursor: pointer;
    }

    &::after {
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.colours.bgDark};
        height: 2px;
        width: 0;
        left: 0;
        bottom: -10px;
        transition: 0.4s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    border-radius: 100px;
    border: none;
    background-color: ${({ theme }) => theme.colours.bgDark};
    color: ${({ theme }) => theme.colours.bgLight};
    transition: background-color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
`;

export default Navbar;
