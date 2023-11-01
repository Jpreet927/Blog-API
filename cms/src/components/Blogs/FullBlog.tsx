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
                <BlogWrapper>
                    <Blog post={post} />
                </BlogWrapper>
                <BlogDetails
                    post={post}
                    setEditBlogFormVisible={setEditBlogFormVisible}
                />
            </Container>
            <Divider />
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
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    padding: 12px 0px 32px;
`;

const BlogWrapper = styled.div`
    width: 25%;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.25);
`;

export default FullBlog;
