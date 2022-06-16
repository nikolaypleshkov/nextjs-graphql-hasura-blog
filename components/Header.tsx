import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useHeaderStyles } from "../shared/styles";
const pages = ["Showcase", "Docs", "Blog"];

const Header = () => {
  const classes = useHeaderStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container className={classes.container}>
        <Logo />
        <Box className={classes.linksContainer}>
          {pages.map((page) => (
            <Link
              key={page.toLowerCase()}
              href={`/${page.toLowerCase()}`}
              className={classes.link}
            >
              <a className={classes.link}>{page}</a>
            </Link>
          ))}
        </Box>
        <Button color="primary" variant="contained">
          Learn
        </Button>
      </Container>
    </AppBar>
  );
};

function Logo(): JSX.Element {
  const classes = useHeaderStyles();
  return (
    <div className={classes.logoContainer}>
      <Link href="/">
        <div className={classes.logoWrapper}>Blog App</div>
      </Link>
    </div>
  );
}

export default Header;
