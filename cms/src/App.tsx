import React from "react";
import UserProvider from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/Utils/PrivateRoute";
import GlobalStyles from "./styles/Global";

function App() {
    return (
        <UserProvider>
            <GlobalStyles />
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <HomePage />
                            </PrivateRoute>
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
                    <Route
                        path="/applications"
                        element={
                            <PrivateRoute>
                                <ApplicationsPage />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
