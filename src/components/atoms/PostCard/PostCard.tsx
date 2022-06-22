import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
  } from "@mui/material";
  import React from "react";
  import ReadMoreIcon from "@mui/icons-material/ReadMore";
  import { Button, RouterLink } from "../index";
  
  const PostCard = ({
    id,
    title,
    description,
  }: {
    id: number;
    title: string;
    description: string;
  }) => {
      
    return (
      <Card sx={{ maxWidth: 445 }}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <RouterLink href={`/posts/${id}`}>
            <Button>
              Read more <ReadMoreIcon />
            </Button>
          </RouterLink>
        </CardActions>
      </Card>
    );
  };
  
  export default PostCard;