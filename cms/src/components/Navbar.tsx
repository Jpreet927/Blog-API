import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import CreateBlogForm from "./Blogs/CreateBlogForm";
import FormContainer from "./Blogs/FormContainer";

interface NavItemProps {
    route: string;
}

const Navbar = () => {
    const location = useLocation();
    const [createBlogFormVisible, setCreateBlogFormVisible] = useState(false);

    let linkStyle = {
        textDecoration: "none",
        color: location.pathname.includes("/post/") ? "#FFFFFF" : "#3F3F3F",
    };

    let activeLinkStyle = {
        textDecoration: "none",
        color: location.pathname.includes("/post/") ? "#FFFFFF" : "#3F3F3F",
        fontWeight: "700",
    };

    if (location.pathname.includes("/login")) {
        return <></>;
    }

    return (
        <>
            <Container>
                <Title route={location.pathname}>Jaipreet Blog</Title>
                <NavList>
                    <NavItem route={location.pathname}>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeLinkStyle : linkStyle
                            }
                        >
                            Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem route={location.pathname}>
                        <NavLink
                            to="/all"
                            style={({ isActive }) =>
                                isActive ? activeLinkStyle : linkStyle
                            }
                        >
                            All Blogs
                        </NavLink>
                    </NavItem>
                    <NavItem route={location.pathname}>
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
                <Button
                    route={location.pathname}
                    onClick={() => setCreateBlogFormVisible(true)}
                >
                    Create a New Blog
                </Button>
            </Container>
            {createBlogFormVisible && (
                <FormContainer>
                    <CreateBlogForm
                        setCreateBlogFormVisible={setCreateBlogFormVisible}
                    />
                </FormContainer>
            )}
        </>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 2rem 6rem;
    position: relative;
    z-index: 998;
`;

const Title = styled.h3`
    font-size: 1.4em;
    color: ${(props: NavItemProps) =>
        props.route.includes("/post/") ? "#FFFFFF" : "#3F3F3F"};
`;

const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 25%;
`;

const NavItem = styled.li`
    list-style: none;
    text-decoration: none;
    color: ${(props: NavItemProps) =>
        props.route.includes("/post/") ? "#FFFFFF" : "#3F3F3F"};
    position: relative;

    &:hover {
        cursor: pointer;
    }

    &::after {
        content: "";
        position: absolute;
        background-color: ${(props: NavItemProps) =>
            props.route.includes("/post/") ? "#FFFFFF" : "#3F3F3F"};
        height: 1px;
        width: 0;
        left: 0;
        bottom: -10px;
        transition: 0.4s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    border-radius: 100px;
    border: none;
    background-color: ${(props: NavItemProps) =>
        props.route.includes("/post/") ? "#FFFFFF" : "#3F3F3F"};
    color: ${(props: NavItemProps) =>
        props.route.includes("/post/") ? "#3F3F3F" : "#FFFFFF"};
    font-weight: 700;
    transition: background-color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: ${(props: NavItemProps) =>
            props.route.includes("/post/") ? "#e5e5e5" : "black"};
    }
`;

export default Navbar;
