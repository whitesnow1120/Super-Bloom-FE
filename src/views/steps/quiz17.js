import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import QuizHeader from "../../components/quizheader";
import completeImg from "../../assets/img/complete.png";

export default function Quizstep17() {

  return (
    <Box>
      <QuizHeader skip={"/"} skipBtn={false} />
      <Container>
        <Grid className="innerContainer">
          <Grid sx={{ mb: 4, mt: 4 }}>
            <img className="completedImage" src={completeImg} alt="" />
            <Typography className="completedMessage">Done</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
