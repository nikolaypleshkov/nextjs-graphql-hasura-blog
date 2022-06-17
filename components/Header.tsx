import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Avatar, Button, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
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
        <UserMenu />
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

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function UserMenu(){  
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (

    <Box sx={{ marginLeft: 5 }}>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>
  )
}

export default Header;
