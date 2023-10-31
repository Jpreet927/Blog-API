import React, { useContext, useState, useEffect } from "react";
import UserProvider, { UserContext } from "./context/AuthContext";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/Utils/PrivateRoute";
import GlobalStyles from "./styles/Global";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled, { ThemeProvider } from "styled-components";
import AllPostsPage from "./pages/AllPostsPage";
import AdminRoute from "./components/Utils/AdminRoute";
import AboutPage from "./pages/AboutPage";

function App() {
    const { user } = useContext(UserContext);
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <UserProvider>
                <Router>
                    <GlobalStyles />
                    <Container>
                        <NavbarContainer>
                            <Navbar />
                        </NavbarContainer>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <PrivateRoute>
                                        <HomePage />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/about"
                                element={
                                    <AdminRoute>
                                        <AboutPage />
                                    </AdminRoute>
                                }
                            />
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/post/:postid"
                                element={
                                    <PrivateRoute>
                                        <PostPage />
                                    </PrivateRoute>
                                }
                            />
                            {/* only for admins */}
                            <Route
                                path="/all"
                                element={
                                    <AdminRoute>
                                        <AllPostsPage />
                                    </AdminRoute>
                                }
                            />
                            {/* only for admins */}
                            <Route
                                path="/applications"
                                element={
                                    <AdminRoute>
                                        <ApplicationsPage />
                                    </AdminRoute>
                                }
                            />
                        </Routes>
                        <FooterContainer>{/* <Footer /> */}</FooterContainer>
                    </Container>
                </Router>
            </UserProvider>
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
