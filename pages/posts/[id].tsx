import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import apolloClient from "../../lib/apollo";
import styled from "@emotion/styled";
import Link from "next/link";
import { Button } from "@mui/material";
import MarkDown from "../../components/MarkDown";

const ALL_BLOGS = gql`
  query GetAllPost {
    blog_app_post {
      title
      id
      description
    }
  }
`;

const GET_POST_BY_ID = gql`
  query GetPostById($id: Int!) {
    blog_app_post_by_pk(id: $id) {
      id
      title
      description
    }
  }
`;

const Post = ({ post }: any) => {
  const [postInfo, setPostInfo] = useState(post);
  return postInfo ? (
    <div
      style={{
        marginTop: "10%",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignSelf: "center",
        padding: 15
      }}
    >
      {/* <CoverImage src={thumbnail} alt="" /> */}
      <TrackDetails>
        <DetailRow>
          <h1>{postInfo.blog_app_post_by_pk.title}</h1>
        </DetailRow>
        <DetailRow>
          <DetailItem>
            <h4>Track details</h4>
            <IconAndLabel>
              <div id="viewCount">4 view(s)</div>
            </IconAndLabel>
          </DetailItem>
          <DetailItem>
            <h4>Author</h4>
            {/* <AuthorImage src={author.photo} /> */}
            <AuthorName>Nikolay</AuthorName>
          </DetailItem>
          <div>
            <StyledLink href={`./module/`}>
              <Button size="large">Start Track</Button>
            </StyledLink>
          </div>
        </DetailRow>
        <MarkDown content={postInfo.blog_app_post_by_pk.description} />
      </TrackDetails>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export async function getStaticPaths() {
  const { loading, error, data } = await apolloClient.query({
    query: ALL_BLOGS,
  });
  const paths = data.blog_app_post.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  console.log(paths);

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  console.log("here bro");

  console.log(params.id);

  const { data } = await apolloClient.query({
    query: GET_POST_BY_ID,
    variables: { id: parseInt(params.id) },
  });

  console.log("data");
  console.log(data);

  return {
    props: {
      post: data,
    },
  };
}

export default Post;

/** Track detail styled components */
const CoverImage = styled.img({
  objectFit: "cover",
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const TrackDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px #838383`,
  backgroundColor: "#fff",
  h1: {
    width: "100%",
    textAlign: "center",
    marginBottom: 5,
  },
  h4: {
    fontSize: "1.2em",
    marginBottom: 5,
    color: "#000",
  },
});

const DetailRow = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px #838383`,
});

const DetailItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#838383",
  alignSelf: "center",
});

const AuthorImage = styled.img({
  height: 30,
  width: 30,
  marginBottom: 8,
  borderRadius: "50%",
  objectFit: "cover",
});

const AuthorName = styled.div({
  lineHeight: "1em",
  fontSize: "1em",
});

const IconAndLabel = styled.div({
  display: "flex",
  flex: "row",
  alignItems: "center",
  maxHeight: 20,
  width: "100%",
  div: {
    marginLeft: 8,
  },
  svg: {
    maxHeight: 16,
  },
  "#viewCount": {
    color: "pink",
  },
});

const ModuleListContainer = styled.div({
  width: "100%",
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginTop: 5,
    li: {
      fontSize: "1em",
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 2,
    },
  },
});

const ModuleLength = styled.div({
  marginLeft: 30,
  color: "#838383",
});
