import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User } from "../ts/types/User";
import { Post } from "../ts/types/Post";

const AuthorPage = () => {
    const { authorid } = useParams();
    const [author, setAuthor] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[] | null>(null);

    useEffect(() => {
        const fetchAuthorData = async () => {
            if (authorid) {
                const response = await fetch(
                    `http://localhost:5000/api/users/${authorid}`
                );

                const data = await response.json();
                setAuthor(data.user);
            }
        };

        if (authorid) fetchAuthorData();
    }, [authorid]);

    useEffect(() => {
        const fetchAuthorPosts = async () => {
            if (authorid) {
                const response = await fetch(
                    `http://localhost:5000/api/posts/author/${authorid}`
                );

                const data = await response.json();
                setPosts(data.posts);
            }
        };

        if (authorid) fetchAuthorPosts();
    }, [authorid]);

    return <div>AuthorPage</div>;
};

export default AuthorPage;
