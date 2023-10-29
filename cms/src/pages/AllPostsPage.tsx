import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/AuthContext";

const AllPostsPage = () => {
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return <div>AllPostsPage</div>;
};

export default AllPostsPage;
