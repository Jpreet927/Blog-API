import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "../components/Divider";
import AuthorTag from "../components/Author/AuthorTag";
import { useParams } from "react-router-dom";
import { Post } from "../ts/types/Post";
import VerticalDivider from "../components/VerticalDivider";
import FormContainer from "../components/Blogs/FormContainer";
import EditBlogForm from "../components/Blogs/EditBlogForm";

const PostPage = () => {
    const { postid } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [editBlogFormVisible, setEditBlogFormVisible] = useState(false);

    useEffect(() => {
        const fetchPostData = async () => {
            const response = await fetch(
                `http://localhost:5000/api/posts/${postid}`
            );
            const data = await response.json();

            setPost(data.post);
        };

        fetchPostData();
    }, []);

    return (
        <>
            <Container>
                <BannerContainer>
                    <Vignette />
                    <Image src={post?.image} />
                </BannerContainer>
                <ContentWrapper>
                    <HeadingWrapper>
                        <TitleWrapper>
                            <RowContainer>
                                <Title>{post?.title}</Title>
                                <VerticalDivider />
                                <Button
                                    onClick={() => setEditBlogFormVisible(true)}
                                >
                                    Edit
                                </Button>
                            </RowContainer>
                            <AuthorTag
                                authorId={post?.author}
                                date={post?.datetime}
                            />
                        </TitleWrapper>
                        <Subtitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                        </Subtitle>
                        <Divider />
                    </HeadingWrapper>
                    <BodyWrapper>
                        <Paragraph>
                            {post?.content
                                .split(".")
                                .slice(
                                    0,
                                    Math.floor(
                                        post.content.split(".").length / 3
                                    )
                                )
                                .join(".")}
                            .
                        </Paragraph>
                        <ImageContainer>
                            <Image src={post?.image} />
                            <Link href={post?.image} target="_blank">
                                {post?.image}
                            </Link>
                        </ImageContainer>
                        <Paragraph>
                            {post?.content
                                .split(".")
                                .slice(
                                    Math.floor(
                                        post.content.split(".").length / 3
                                    )
                                )
                                .join(".")}
                        </Paragraph>
                        <Divider />
                    </BodyWrapper>
                    <TitleWrapper>
                        <AuthorTag
                            authorId={post?.author}
                            date={post?.datetime}
                        />
                        <LinksWrapper>
                            <TwitterIcon />
                            <LinkedInIcon />
                            <GitHubIcon />
                            <PersonIcon />
                        </LinksWrapper>
                    </TitleWrapper>
                </ContentWrapper>
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
    width: 100%;
    color: ${({ theme }) => theme.colours.paragraph};
`;

const RowContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 4rem 25rem 6rem 25rem;
`;

const BannerContainer = styled.div`
    height: 300px;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

const Vignette = styled.div`
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
    );
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 42px;
`;

const Paragraph = styled.p`
    font-size: 14px;
    line-height: 2em;
`;

const Subtitle = styled.p`
    font-size: 14px;
    line-height: 1.5em;
    font-style: italic;
    color: ${({ theme }) => theme.colours.subtext};
`;

const Link = styled.a`
    font-size: 12px;
`;

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const ImageContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;

const LinksWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-radius: 100px;
    border: none;
    background-color: #3f3f3f;
    color: #ffffff;
    font-weight: 700;
    transition: background-color 0.4s ease;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
`;

export default PostPage;
