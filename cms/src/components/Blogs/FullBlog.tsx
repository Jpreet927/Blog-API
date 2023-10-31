import React, { useState } from "react";
import styled from "styled-components";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import CategoryTag from "../CategoryTag";
import { Post } from "../../ts/types/Post";
import FormContainer from "./FormContainer";
import EditBlogForm from "./EditBlogForm";

const FullBlog = ({ post }: { post: Post }) => {
    const [editBlogFormVisible, setEditBlogFormVisible] = useState(false);

    return (
        <>
            <Container>
                <Blog post={post} />
                <BlogDetails
                    post={post}
                    setEditBlogFormVisible={setEditBlogFormVisible}
                />
            </Container>
            {editBlogFormVisible && (
                <FormContainer>
                    <EditBlogForm
                        setEditBlogFormVisible={setEditBlogFormVisible}
                        blogDetails={post!}
                    />
                </FormContainer>
            )}
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const TagWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export default FullBlog;
