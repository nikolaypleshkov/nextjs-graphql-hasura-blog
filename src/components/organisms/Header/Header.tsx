import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { MenuItem, Typography } from "@mui/material";
import { RouterLink, DropdownMenu } from "../../atoms";
import Link from "next/link";
import { useHeaderStyles } from "../../../shared/styles";
const pages = ["Showcase", "Docs", "Blog"];

const Header = () => {
  const classes = useHeaderStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container className={classes.container}>
        <Logo />
        <Box className={classes.linksContainer}>
          {pages.map((page) => (
            <RouterLink
              key={page.toLowerCase()}
              href={`/${page.toLowerCase()}`}
              anchorClassName={classes.link}
            >
              {page}
            </RouterLink>
          ))}
        </Box>
        <UserMenu />
      </Container>
    </AppBar>
  );
};

function Logo(): JSX.Element {
  const classes = useHeaderStyles();
  return (
    <div className={classes.logoContainer}>
      <RouterLink href="/">
        <div className={classes.logoWrapper}>Blog App</div>
      </RouterLink>
    </div>
  );
}

const authSettings = ["Profile", "Account", "Dashboard", "Logout"];
const unAuthSettings = ["Login", "Register"];
function UserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const isAuth = false;
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <DropdownMenu>
      {isAuth
        ? authSettings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))
        : unAuthSettings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <RouterLink href={setting.toLowerCase()}>
                {setting}
              </RouterLink>
            </MenuItem>
          ))}
    </DropdownMenu>
  );
}

export default Header;
