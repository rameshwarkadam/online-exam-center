import React, { useEffect, useState } from "react";
import { getExams } from "../services/apiService";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getExams();
        setExams(response.data);
      } catch (err) {
        setError("Failed to load exams.");
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  const programmingLanguages = [
    "JavaScript",
    "Node JS",
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "Ruby",
    "PHP",
    "Swift",
    "Go",
    "Rust",
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        {/* <Typography variant="h4" component="h2" gutterBottom align="center">
          Available Exams
        </Typography> */}
        {programmingLanguages.map((e) => {
          return <Button sx={{m:0.5}} variant="outlined">{e}</Button>;
        })}
        <div style={{ display: "flex", justifyContent: "center", mt:5 }}>
          {" "}
          {loading && <CircularProgress />}
        </div>
        {error && <Alert severity="error">{error}</Alert>}
        <List>
          {exams.map((exam) => (
            <ListItem key={exam._id} sx={{ borderBottom: "1px solid #ccc" }}>
              <ListItemText primary={exam.title} />
            </ListItem>
          ))}
        </List>
        {exams.length === 0 &&
          !loading &&
          error(
            <Typography variant="body1" align="center">
              No exams available.
            </Typography>
          )}
        {/* </CardContent>
            </Card> */}
      </Container>
    </>
  );
};

export default Dashboard;
