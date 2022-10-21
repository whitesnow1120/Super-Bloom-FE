import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

import QuizHeader from "../../components/quizheader";
import completeImg from "../../assets/img/complete.png";

export default function Quizstep17() {
  const navigate = useNavigate();

  return (
    <Box>
      <QuizHeader skip={"/screen-296bb8d5"} skipBtn={false} />
      <Container>
        <Grid className="innerContainer">
          <Grid sx={{ mb: 4, mt: 4 }}>
            <img className="complete-img" src={completeImg} alt="" />
            <Typography className="complete-message">Done</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
