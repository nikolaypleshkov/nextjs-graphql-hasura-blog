import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../src/utils/createEmotionCache";
import lightThemeOptions from "../styles/lightThemeOptions";
import "../styles/globals.css";
import Layout from "../src/components/root/Layout";

import { StylesProvider, createGenerateClassName } from "@mui/styles";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "../src/lib/apollo";
import { ProvideAuth } from "../src/utils/auth";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const lightTheme = createTheme(lightThemeOptions);

const generateClassName = createGenerateClassName({
  productionPrefix: "c",
});

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ApolloProvider client={apolloClient}>
      <ProvideAuth>
        <CacheProvider value={emotionCache}>
          <StylesProvider generateClassName={generateClassName}>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </StylesProvider>
        </CacheProvider>
      </ProvideAuth>
    </ApolloProvider>
  );
};

export default MyApp;
