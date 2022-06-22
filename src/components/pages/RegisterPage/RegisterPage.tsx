import Head from "next/head";
import React from "react";
import {Button} from "../../atoms/";

const RegisterPage = () => {
  return (
    <section>
      <Head>
        <title>Blog App - Register</title>
      </Head>
      <h1>Register page</h1>
      <Button type="submit" color="primary" variant="contained" fullWidth>
        This is custom
      </Button>
    </section>
  );
};

export default RegisterPage;
