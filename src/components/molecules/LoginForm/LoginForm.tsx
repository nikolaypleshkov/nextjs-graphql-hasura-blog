import React, { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Avatar,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Button, RouterLink } from "../../atoms/";
import { useLoginStyles } from "../../../shared/styles";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useAuth } from "../../../utils/auth";
import { useRouter } from "next/router";

interface IFormData {
  email: string;
  password: string;
}

const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "bg", "eu"] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")),
});

const LoginForm: React.FC = () => {
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const classes = useLoginStyles();

  const auth = useAuth();
  const route = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormData>({
    resolver: joiResolver(schema),
  });

  const handleFormSumbit: SubmitHandler<IFormData> = (data: IFormData) => {
    const { email, password } = data;

    auth
      .signin(email, password)
      .then((res: any) => {
        //Todo: Toast component to show success message
        route.push("/");
      })
      .catch((err: any) => {
        //Todo: Toast component to show error message
        console.error(err);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.main}>
        <Grid alignItems="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <form onSubmit={handleSubmit(handleFormSumbit)} className={classes.form}>
          <FormControl>
            <Input
              placeholder="Enter Email"
              type="email"
              {...register("email")}
              fullWidth
              required
            />
            {errors.email?.message && (
              <p className="error-label">{errors.email.message}</p>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
          <Input
            placeholder="Enter password"
            type="password"
            {...register("password")}
            required
          />
          {errors.password?.message && (
            <p className="error-label">{errors.password.message}</p>
          )}
          </FormControl>
          <br />
          <FormControlLabel
            control={<Checkbox name="checkBox" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Login
          </Button>
        </form>
        <div className="space-breaker">
          <div className="line1"></div>
          <div className="line1-text">or</div>
          <div className="line1"></div>
        </div>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Login with Google
        </Button>
        <Typography>
          Create an account ?
          <RouterLink href="/register" anchorClassName={classes.link}>
            Sign Up
          </RouterLink>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
