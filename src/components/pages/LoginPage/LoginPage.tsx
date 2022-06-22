import React from "react";
import Head from "next/head";
import { useLoginStyles } from "../../../shared/styles";
import { LoginForm } from "../../molecules/";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Blog App - Login</title>
      </Head>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
