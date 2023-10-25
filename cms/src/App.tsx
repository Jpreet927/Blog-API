import React, { useContext, useEffect } from "react";
import "./App.css";
import UserProvider, { UserContext } from "./context/AuthContext";

function App() {
    const { user } = useContext(UserContext);

    return (
        <UserProvider>
            <div className="App">
                <header className="App-header"></header>
            </div>
        </UserProvider>
    );
}

export default App;
