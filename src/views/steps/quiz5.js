import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuizHeader from "../../components/quizheader";

export default function Quizstep5() {
  var navigate = useNavigate();
  const clickHandler = () => {
    navigate("/screen-cea9542f");
  };
  return (
    <Box>
      <QuizHeader skip={"/screen-cea9542f"} backBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                5
              </Typography>
              <Typography className="questionnumber">Question 5/15</Typography>
              <Typography variant="h5" className="quesheading">
                We'll Help You Journal And Document Your Happiness Journey{" "}
              </Typography>
              <Typography className="description">
                With the help of Super Bloom's team of experts, you will learn
                the psychology behind happiness and how to use it to feel better
                every day.
              </Typography>
            </Card>
          </Box>

          <Button onClick={clickHandler} className="btnbutton">
            I want to track my progress{" "}
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
