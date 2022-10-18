import React, { useEffect } from "react";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuizHeader from "../../components/quizheader";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/system";

export default function Quizstep11() {
  var navigate = useNavigate();
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
      <QuizHeader skip={"/screen-f24b6764"} backBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                11
              </Typography>
              <Typography className="questionnumber">Question 11/15</Typography>
              <Typography variant="h5" className="quesheading">
                How Experienced Are You With Journaling?
              </Typography>
            </Card>
          </Box>

          <Grid sx={{ mt: 6, mb: 6 }}>
            <Stack className="ratingvalue">
              <Typography>Never Tried</Typography>
              <Typography align="center">Tried It</Typography>
              <Typography align="right">Expert </Typography>
            </Stack>
            <StyledRating
              width="100%"
              className="ratingcustome"
              name="customized-color"
              defaultValue={
                localStorage.getItem("journaling") !== null
                  ? localStorage.getItem("journaling")
                  : 3
              }
              onChange={(e) => toggleHandler(e)}
              getLabelText={(value) => `${value}`}
              max={5}
              icon={
                <Typography
                  fontSize="inherit"
                  className="ratingfilll"
                ></Typography>
              }
              emptyIcon={
                <Typography fontSize="inherit" className="rating1"></Typography>
              }
            />
          </Grid>
          <Button onClick={clickHandler} className="btnbutton">
            Next <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
