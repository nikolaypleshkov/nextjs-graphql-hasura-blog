import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
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

interface IFormData {
  email: string;
  username: string;
  password: string;
}

const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "bg", "eu"] },
    })
    .required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")),
});

const RegisterForm: React.FC = () => {
  const classes = useLoginStyles();
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormData>({
    resolver: joiResolver(schema),
  });

  return (
    <Grid>
      <Paper elevation={10} className={classes.main}>
        <Grid alignItems="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Register</h2>
        </Grid>
        <form>
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

          <TextField
            label="Username"
            placeholder="Enter username"
            type="text"
            {...register("username")}
            fullWidth
            required
          />
          {errors.username?.message && (
            <p className="error-label">{errors.username.message}</p>
          )}

          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            {...register("password")}
            fullWidth
            required
          />
          {errors.password?.message && (
            <p className="error-label">{errors.password.message}</p>
          )}

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
          Have an account ?
          <RouterLink href="/login" anchorClassName={classes.link}>
            Sign in
          </RouterLink>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
