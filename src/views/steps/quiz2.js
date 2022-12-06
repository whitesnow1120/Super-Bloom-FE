import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import QuizHeader from "../../components/quizheader";

export default function Quizstep1() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-d375fd85");
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-d375fd85"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                2
              </Typography>
              <Typography className="questionNumber">Question 2/15</Typography>
              <Typography variant="h5" className="questionHeading">
                In A Typical Week, How Many "Bad" Days Do You Have?
              </Typography>
              <Typography className="description" sx={{ mb: 2 }}>
                Happy people generally have to work on their happiness -
                everyone has bad days!
              </Typography>
              <Typography className="description">
                There is no single key for happiness and it doesn't come
                naturally, you need to figure out what works for you by getting
                to know yourself first!
              </Typography>
            </Card>
          </Box>

          <Button onClick={clickHandler} className="nextButton">
            Let's start working on happiness
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
