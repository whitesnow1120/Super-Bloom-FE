import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function QuizHeader(props) {
  const { skip } = props;
  const navigate = useNavigate();

  const skipHandler = () => {
    switch (skip) {
      case "/screen-0348468e":
        localStorage.removeItem("mainGoals");
        break;
      case "/screen-cea9542f":
        localStorage.removeItem("otherGoals");
        break;
      case "/screen-8556a584":
        localStorage.removeItem("sleepingPatterns");
        break;
      default:
        break;
    }

    navigate(skip);
  };

  return (
    <Grid className="headerQuiz" bgcolor="#4E4096">
      <Container>
        <Box className="CustomContainer">
          <Box className="backButton">
            <ArrowBackIcon onClick={() => navigate(-1)} />
          </Box>
          <Link variant="h4" className="logoTitle">
            Quiz
          </Link>
          {props.skipBtn ? (
            <Typography variant="h2" onClick={skipHandler} className="skipText">
              Skip
            </Typography>
          ) : (
            <Box className="blankImage"></Box>
          )}
        </Box>
      </Container>
    </Grid>
  );
}
