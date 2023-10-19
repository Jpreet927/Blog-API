import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import BlogPostPage from "./pages/BlogPostPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/Global";
import AuthorPage from "./pages/AuthorPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Container>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blogs" element={<PostsPage />} />
                    <Route path="/blogs/:blogid" element={<BlogPostPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/author/:authorid" element={<AuthorPage />} />
                </Routes>
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </Container>
        </ThemeProvider>
    );
}

const theme = {
    colours: {
        paragraph: "#3F3F3F",
        subtext: "#B1B1B1",
        bgLight: "#FFFFFF",
        bgMed: "#F2F2F2",
        bgDark: "#3F3F3F",
    },
    fonts: {
        serifMain: "",
        sansSerifMain: "",
    },
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    position: relative;
`;

const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;
`;

const FooterContainer = styled.div``;

export default App;
