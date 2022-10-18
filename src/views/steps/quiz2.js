import React from "react";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuizHeader from "../../components/quizheader";

export default function Quizstep1() {
  var navigate = useNavigate();
  const clickHandler = () => {
    navigate("/screen-d375fd85");
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-d375fd85"} backBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                2
              </Typography>
              <Typography className="questionnumber">Question 2/15</Typography>
              <Typography variant="h5" className="quesheading">
                In A Typical Week, How Many "Bad" Days Do You Have?
              </Typography>
              <Typography className="description" sx={{ mb: 2 }}>
                Happy people generally have to work on their happiness -
                everyone has bad days!{" "}
              </Typography>
              <Typography className="description">
                There is no single key for happiness and it doesn't come
                naturally, you need to figure out what works for you by getting
                to know yourself first!
              </Typography>
            </Card>
          </Box>

          <Button onClick={clickHandler} className="btnbutton">
            Let's start working on happiness{" "}
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
