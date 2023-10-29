import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/AuthContext";

const PostPage = () => {
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log("Post page");
        console.log(user);
    });
    return <div>PostPage</div>;
};

export default PostPage;
