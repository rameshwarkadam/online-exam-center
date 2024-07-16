import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Grid
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ name, email, password });
    navigate("/"); // Redirect to login on successful registration
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
            sx={{ mb: 3, fontWeight:600 }}
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
          >
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
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
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography sx={{ mt: 2 }} align="center">
            Already have an account?{" "}
            <Link to="/login" variant="body2">
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;
