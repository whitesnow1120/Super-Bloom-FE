import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import QuizHeader from "../../components/quizheader";

export default function Quizstep4() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-bd393b98");
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-bd393b98"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                4
              </Typography>
              <Typography className="questionnumber">Question 4/15</Typography>
              <Typography variant="h5" className="quesheading">
                We'll Help You Become More Grateful{" "}
              </Typography>
              <Typography className="description" sx={{ mb: 2 }}>
                Gratitude is at the core of happy life - not just something you
                practice over the holidays!
              </Typography>
              <Typography className="description">
                Practicing gratitude and implementing it in your routine will
                make you happier.{" "}
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
