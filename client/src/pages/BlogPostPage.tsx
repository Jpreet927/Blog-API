import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "../components/Divider";
import AuthorTag from "../components/Author/AuthorTag";

const BlogPostPage = () => {
    return (
        <Container>
            <BannerContainer>
                <Vignette />
                <Image src={require("../assets/placeholder.jpg")} />
            </BannerContainer>
            <ContentWrapper>
                <HeadingWrapper>
                    <TitleWrapper>
                        <Title>Blog Post Title</Title>
                        <AuthorTag />
                    </TitleWrapper>
                    <Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                    </Subtitle>
                    <Divider />
                </HeadingWrapper>
                <BodyWrapper>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Paragraph>
                    <ImageContainer>
                        <Image src={require("../assets/placeholder.jpg")} />
                    </ImageContainer>
                    <Paragraph>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur? At vero eos et accusamus et iusto odio
                        dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum
                        quidem rerum facilis est et expedita distinctio. Nam
                        libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus. Temporibus autem quibusdam et aut
                        officiis debitis aut rerum necessitatibus saepe eveniet
                        ut et voluptates repudiandae sint et molestiae non
                        recusandae. Itaque earum rerum hic tenetur a sapiente
                        delectus, ut aut reiciendis voluptatibus maiores alias
                        consequatur aut perferendis doloribus asperiores
                        repellat.
                    </Paragraph>
                    <Divider />
                </BodyWrapper>
                <TitleWrapper>
                    <AuthorTag />
                    <LinksWrapper>
                        <TwitterIcon />
                        <LinkedInIcon />
                        <GitHubIcon />
                        <PersonIcon />
                    </LinksWrapper>
                </TitleWrapper>
            </ContentWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${({ theme }) => theme.colours.paragraph};
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

export default BlogPostPage;
