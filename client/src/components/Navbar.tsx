import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

type NavItemProps = {
    route: string;
};

type ContainerProps = {
    $bgVisible: boolean;
    $route: string;
};

const Navbar = () => {
    const location = useLocation();
    const [navBackgroundVisible, setNavBackgroundVisible] = useState(false);
    const [mobileNavVisible, setMobileNavVisible] = useState(false);

    useEffect(() => console.log(location.pathname.includes("/blogs/")), []);

    useEffect(() => {
        const toggleBackground = () => {
            if (window.scrollY > 100) {
                setNavBackgroundVisible(true);
            } else {
                setNavBackgroundVisible(false);
            }
        };

        window.addEventListener("scroll", toggleBackground);
    }, []);

    let linkStyle = {
        textDecoration: "none",
        color: location.pathname.includes("/blogs/") ? "#FFFFFF" : "#3F3F3F",
    };

    let activeLinkStyle = {
        textDecoration: "none",
        color: location.pathname.includes("/blogs/") ? "#FFFFFF" : "#3F3F3F",
        fontWeight: "700",
    };

    return (
        <Container $bgVisible={navBackgroundVisible} $route={location.pathname}>
            <TitleContainer
                $mobileNav={mobileNavVisible}
                $bgVisible={navBackgroundVisible}
                $route={location.pathname}
            >
                <Title route={location.pathname}>Jaipreet Blog</Title>
                <IconContainer
                    $mobileNav={mobileNavVisible}
                    $bgVisible={navBackgroundVisible}
                    $route={location.pathname}
                    onClick={() => setMobileNavVisible((prev) => !prev)}
                >
                    {mobileNavVisible ? <CloseIcon /> : <MenuIcon />}
                </IconContainer>
            </TitleContainer>
            <NavContainer
                $mobileNav={mobileNavVisible}
                $bgVisible={navBackgroundVisible}
                $route={location.pathname}
            >
                <NavList>
                    <NavItem route={location.pathname}>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeLinkStyle : linkStyle
                            }
                            onClick={() => setMobileNavVisible(false)}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem route={location.pathname}>
                        <NavLink
                            to="/blogs"
                            style={({ isActive }) =>
                                isActive ? activeLinkStyle : linkStyle
                            }
                            onClick={() => setMobileNavVisible(false)}
                        >
                            Blogs
                        </NavLink>
                    </NavItem>
                    <NavItem route={location.pathname}>
                        <NavLink
                            to="/about"
                            style={({ isActive }) =>
                                isActive ? activeLinkStyle : linkStyle
                            }
                            onClick={() => setMobileNavVisible(false)}
                        >
                            About
                        </NavLink>
                    </NavItem>
                </NavList>
                <Button route={location.pathname}>Join The Blog</Button>
            </NavContainer>
        </Container>
    );
};

const Container = styled.div<{ $bgVisible: boolean; $route: string }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 2rem 6rem;
    position: relative;
    z-index: 998;
    background-color: ${(props: ContainerProps) =>
        props.$bgVisible
            ? props.$route.includes("/blogs/")
                ? "#3f3f3f"
                : "#dadada"
            : ""};
    transition: background-color 300ms ease-in-out;

    @media only screen and (max-width: 1500px) {
        padding: 2rem 4rem;
    }

    @media only screen and (max-width: 1200px) {
        padding: 2rem 3rem;
    }

    @media only screen and (max-width: 600px) {
        padding: 0rem;
        flex-direction: column;
    }
`;

const IconContainer = styled.div<{
    $mobileNav: boolean;
    $bgVisible: boolean;
    $route: string;
}>`
    display: none;
    transition: transform 100ms linear;
    color: ${(props) =>
        props.$route.includes("/blogs/") ? "#dadada" : "#3f3f3f"};

    @media only screen and (max-width: 600px) {
        display: block;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const TitleContainer = styled.div<{
    $mobileNav: boolean;
    $bgVisible: boolean;
    $route: string;
}>`
    @media only screen and (max-width: 600px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
        background-color: ${(props) =>
            props.$bgVisible || props.$mobileNav
                ? props.$route.includes("/blogs/")
                    ? "#3f3f3f"
                    : "#dadada"
                : ""};
        padding: ${(props) => (props.$mobileNav ? "4rem 4rem" : "2rem 4rem")};
        align-items: center;
        gap: 4rem;
    }
`;

const Title = styled.h3`
    font-size: 1.4em;
    color: ${(props: NavItemProps) =>
        props.route.includes("/blogs/") ? "#FFFFFF" : "#3F3F3F"};

    @media only screen and (max-width: 600px) {
        font-size: 2rem;
    }
`;

const NavContainer = styled.div<{
    $mobileNav: boolean;
    $bgVisible: boolean;
    $route: string;
}>`
    display: flex;
    justify-content: space-between;
    width: 60%;
    align-items: center;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
        background-color: ${(props) =>
            props.$bgVisible || props.$mobileNav
                ? props.$route.includes("/blogs/")
                    ? "#3f3f3f"
                    : "#dadada"
                : ""};
        padding: 0rem 4rem 4rem 4rem;
        align-items: start;
        justify-content: start;
        gap: 4rem;
        display: ${(props) => (props.$mobileNav ? "flex" : "none")};
    }
`;

const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 25%;
    gap: 2rem;

    @media only screen and (max-width: 600px) {
        width: fit-content;
        flex-direction: column;
        gap: 4rem;
    }
`;

const NavItem = styled.li`
    list-style: none;
    text-decoration: none;
    color: ${(props: NavItemProps) =>
        props.route.includes("/blogs/") ? "#FFFFFF" : "#3F3F3F"};
    position: relative;

    &:hover {
        cursor: pointer;
    }

    &::after {
        content: "";
        position: absolute;
        background-color: ${(props: NavItemProps) =>
            props.route.includes("/blogs/") ? "#FFFFFF" : "#3F3F3F"};
        height: 1px;
        width: 0;
        left: 0;
        bottom: -10px;
        transition: 0.4s ease;
    }

    &:hover::after {
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        font-size: 24px;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    border-radius: 100px;
    border: none;
    background-color: ${(props: NavItemProps) =>
        props.route.includes("/blogs/") ? "#FFFFFF" : "#3F3F3F"};
    color: ${(props: NavItemProps) =>
        props.route.includes("/blogs/") ? "#3F3F3F" : "#FFFFFF"};
    font-weight: 700;
    transition: background-color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: ${(props: NavItemProps) =>
            props.route.includes("/blogs/") ? "#e5e5e5" : "black"};
    }

    @media only screen and (max-width: 600px) {
        font-size: 24px;
        padding: 16px 32px;
    }
`;

export default Navbar;
