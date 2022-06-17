import { gql, useQuery } from "@apollo/client";
import { CircularProgress, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import apolloClient from "../lib/apollo";
import { useTopBlogsStyles } from "../shared/styles";

const ALL_BLOGS = gql`
  query GetAllPost {
    blog_app_post {
      title
      id
      description
    }
  }
`;

const TopBlogs = () => {
  const classes = useTopBlogsStyles();
  const [posts, setPosts] = useState<any[]>([]);
  const { loading, error, data } = useQuery(ALL_BLOGS, {
    onCompleted: (data) => {
      setPosts(data.blog_app_post);
    },
  });
  return (
    <section className={classes.main}>
      <div>
        <Typography variant="h5" fontWeight={800}>
          Top blogs today
        </Typography>
        <br />
        <Typography variant="body1">Check all 🔥 blogs for today</Typography>
        <main className={classes.postsContainer}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {loading ? <Loading /> : posts.map((post: any) => (
              <Grid item xs={2} sm={4} md={4} key={post.id}>
                <BlogCard id={post.id} title={post.title} description={post.description} />
              </Grid>
            )) }
          </Grid>
        </main>
      </div>
    </section>
  );
};

function Loading(){
  return (
    <div style={{
      width: "100%",
      textAlign: "center"
    }}>
       <CircularProgress />
    </div>
  )
}

export default TopBlogs;
