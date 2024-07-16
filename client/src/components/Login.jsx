import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    navigate("/dashboard"); // Redirect to dashboard on successful login
  };

  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          marginTop: 20,
          p: 2,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <CardContent>
          <Typography
            sx={{ mb: 3,fontWeight:600 }}
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
          >
           Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": { backgroundColor: "darkgrey" },
                  }}
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography sx={{ mt: 2 }} align="center">
            Don't have an account?{" "}
            <Link to="/register" variant="body2">
              Register
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
