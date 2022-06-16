import { Theme } from "@mui/system";
import { makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: "#ffffff !important",
    color: "#000000",
    display: "flex",
    alignItems: "center",
    order: 0,
    zIndex: "100 !important",
    boxShadow: "none",
    height: "80px"
  },
  container: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    maxWidth: 975,
    width: "100%",
    padding: "0px 20px",
  },
  logoContainer: {
    display: "flex",
    flex: "0 0 20%",
    minWidth: 50,
    cursor: "pointer"
  },
  logoWrapper: {
    flex: "0 0 auto",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "stretch",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  link: {
    color: "#838383 !important", 
    '&:hover': {
      color: "#000 !important"
    }
    }
}));

export const useBannerStyles = makeStyles(() => ({
  main: {
    width: "100%",
    margin: "8rem auto",
    padding: "0 0",
    textAlign: "center"
  },
  section: {
    width: "100%",
    margin: "0 auto",
    padding: "0 1rem",
    maxWidth: "1024px",
    marginTop: "2.2rem"
  },
  buttonContainer: {
    padding: "5px"
  },
  buttonShadow: {
    boxShadow: "0 4px 14px 0 rgb(0 118 255 / 39%)",
  }
}));

export const useTopBlogsStyles = makeStyles(() => ({
  main: {
    width: "100%",
    margin: "8rem auto",
    padding: "0 0",
    textAlign: "center"
  },
  postsContainer: {
    marginTop: "5rem"
  }
}))
