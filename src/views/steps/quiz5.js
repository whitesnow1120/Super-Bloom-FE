import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import QuizHeader from "../../components/quizheader";

export default function Quizstep5() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-cea9542f");
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-cea9542f"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                5
              </Typography>
              <Typography className="questionNumber">Question 5/15</Typography>
              <Typography variant="h5" className="questionHeading">
                We'll Help You Journal And Document Your Happiness Journey
              </Typography>
              <Typography className="description">
                With the help of Super Bloom's team of experts, you will learn
                the psychology behind happiness and how to use it to feel better
                every day.
              </Typography>
            </Card>
          </Box>

          <Button onClick={clickHandler} className="nextButton">
            I want to track my progress
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
