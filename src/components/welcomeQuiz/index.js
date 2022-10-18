import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function WelcomeQuiz() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-0348468e");
  };

  return (
    <Box>
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h1" className="heading">
                Welcome to <span className="titleseconnd"> Super Bloom!</span>
              </Typography>
              <Typography className="description" sx={{ mb: 2 }}>
                Before getting started, please don't feel shy to overshare - all
                the information you provide is handled with care and kept
                strictly confidential.{" "}
              </Typography>
              <Typography className="description">
                Super Bloom is a safe space where your thoughts can run free
                without any judgement. We want you to feel at home.{" "}
              </Typography>
            </Card>
          </Box>

          <Button onClick={clickHandler} className="btnbutton">
            Let's get started! <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
