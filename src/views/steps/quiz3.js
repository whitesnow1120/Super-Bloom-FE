import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import QuizHeader from "../../components/quizheader";

export default function Quizstep3() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-84e7c248");
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-84e7c248"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                3
              </Typography>
              <Typography className="questionNumber">Question 3/15</Typography>
              <Typography variant="h5" className="questionHeading">
                Let's Start By Working On Your Mindset
              </Typography>
              <Typography className="description">
                With the help of Super Bloom's team of experts, you will learn
                the psychology behind happiness and how to use it to feel better
                every day.
              </Typography>
            </Card>
          </Box>

          <Button onClick={clickHandler} className="nextButton">
            Got it! <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
