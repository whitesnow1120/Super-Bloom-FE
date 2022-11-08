import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import QuizHeader from "../../components/quizheader";

export default function Quizstep7() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-3c87535a");
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-3c87535a"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                {" "}
                7
              </Typography>
              <Typography className="questionNumber">Question 7/15</Typography>
              <Typography variant="h5" className="questionHeading">
                Share A Little About Your Starting Mindset{" "}
              </Typography>
              <Typography className="description">
                Don't forget: Your information is confidential and we won't
                share it!{" "}
              </Typography>
            </Card>
          </Box>

          <Button onClick={clickHandler} className="nextButton">
            Ok <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
