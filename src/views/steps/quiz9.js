import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import QuizHeader from "../../components/quizheader";

export default function Quizstep9() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-8556a584");
  };

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 7,
      label: "7",
    },
  ];

  function valueText(value) {
    return `${value}`;
  }

  const toggleHandler = (e) => {
    localStorage.setItem("goodDays", e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("badDays") === null) {
      localStorage.setItem("badDays", 3);
    }
  }, []);

  return (
    <Box>
      <QuizHeader skip={"/screen-8556a584"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                {" "}
                9
              </Typography>
              <Typography className="questionNumber">Question 9/15</Typography>
              <Typography variant="h5" className="questionHeading">
                In A Typical Week, How Many Good Days Do You Have?
              </Typography>
              <Typography className="description" sx={{ mb: 2 }}>
                Good days are days you would love to relive!{" "}
              </Typography>
              <Typography className="description">
                These don't have to be extravagant, sometimes a good day just
                means you had a great coffee, caught up with an old friend or
                felt relieved about finishing a task you've been pushing off!{" "}
              </Typography>
            </Card>
          </Box>
          <Grid className="daysSlider" sx={{ mt: 5, mb: 5, pt: 5 }}>
            <Slider
              className="slider7"
              aria-label="Always visible"
              defaultValue={
                localStorage.getItem("goodDays") !== null
                  ? parseInt(localStorage.getItem("goodDays"))
                  : 3
              }
              onChange={(e) => toggleHandler(e)}
              getAriaValueText={valueText}
              marks={marks}
              max={7}
              valueLabelDisplay="on"
              sx={{
                color: "#A25CD9",
              }}
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
