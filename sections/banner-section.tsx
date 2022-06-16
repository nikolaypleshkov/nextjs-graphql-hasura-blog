import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useBannerStyles } from "../shared/styles";
const BannerSection = () => {
  const classes = useBannerStyles();
  return (
    <section className={classes.main}>
      <div className={classes.section}>
        <Typography variant="h1" fontWeight={800}>
          The best blog app builded with Next.js 🚀
        </Typography>
        <br />
        <Typography variant="body1">
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </Typography>
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 25}}>
        <div className={classes.buttonContainer}>
          <Button variant="contained" className={classes.buttonShadow}>
            Start blogging now
          </Button>
        </div>
        <div className={classes.buttonContainer}>
          <Button className={classes.buttonShadow}>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
