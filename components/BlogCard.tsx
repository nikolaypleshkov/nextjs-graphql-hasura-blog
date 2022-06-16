import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Link from 'next/link';
const BlogCard = ({id, title, description}: {id: number,title: string, description: string}) => {
  return (
      <Card sx={{ maxWidth: 445 }}>
          <CardHeader title={title} />
          <CardContent>
              <Typography variant='body2' color="text.secondary">
                  {description}
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
              <Link href={`/posts/${id}`}>
                  <a>
                      <Button>
                        Read more <ReadMoreIcon />
                      </Button>
                  </a>
              </Link>
          </CardActions>
      </Card>
  )
}

export default BlogCard