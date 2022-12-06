import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stack } from "@mui/system";

import QuizHeader from "../../components/quizheader";

export default function Quizstep11() {
  const navigate = useNavigate();

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  const clickHandler = () => {
    navigate("/screen-f24b6764");
  };

  const toggleHandler = (e) => {
    localStorage.setItem("journaling", e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("journaling") === null) {
      localStorage.setItem("journaling", 3);
    }
  }, []);

  return (
    <Box>
      <QuizHeader skip={"/screen-f24b6764"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                11
              </Typography>
              <Typography className="questionNumber">Question 11/15</Typography>
              <Typography variant="h5" className="questionHeading">
                How Experienced Are You With Journaling?
              </Typography>
            </Card>
          </Box>

          <Grid sx={{ mt: 6, mb: 6 }}>
            <Stack className="ratingValue">
              <Typography>Never Tried</Typography>
              <Typography align="center">Tried It</Typography>
              <Typography align="right">Expert </Typography>
            </Stack>
            <StyledRating
              width="100%"
              className="ratingCustom"
              name="customized-color"
              defaultValue={
                localStorage.getItem("journaling") !== null
                  ? parseInt(localStorage.getItem("journaling"))
                  : 3
              }
              onChange={(e) => toggleHandler(e)}
              getLabelText={(value) => `${value}`}
              max={5}
              icon={<Typography fontSize="inherit"></Typography>}
              emptyIcon={
                <Typography fontSize="inherit" className="rating1"></Typography>
              }
            />
          </Grid>
          <Button onClick={clickHandler} className="nextButton">
            Next <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
