import React, { useEffect } from "react";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuizHeader from "../../components/quizheader";
import Slider from "@mui/material/Slider";

export default function Quizstep8() {
  var navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-1246ff11");
  };

  const toggleHandler = (e) => {
    localStorage.setItem("badDays", e.target.value);
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

  useEffect(() => {
    if (localStorage.getItem("badDays") === null) {
      localStorage.setItem("badDays", 3);
    }
  }, []);

  return (
    <Box>
      <QuizHeader skip={"/screen-1246ff11"} backBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                8
              </Typography>
              <Typography className="questionnumber">Question 8/15</Typography>
              <Typography variant="h5" className="quesheading">
                In A Typical Week, How Many "Bad" Days Do You Have?{" "}
              </Typography>
              <Typography className="description" sx={{ mb: 2 }}>
                Bad days, are days you would of liked to skip.{" "}
              </Typography>
              <Typography className="description" sx={{ mb: 2 }}>
                Public Service Announcement: Everyone has bad days, we're only
                human.{" "}
              </Typography>
              <Typography className="description">
                These could be days where you felt overwhelmed at work, woke up
                tired or felt anxious.{" "}
              </Typography>
            </Card>
          </Box>
          <Grid sx={{ mt: 5, mb: 5, pt: 5 }}>
            <Slider
              className="slider7"
              aria-label="Always visible"
              defaultValue={
                localStorage.getItem("badDays") !== null
                  ? localStorage.getItem("badDays")
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

          <Button onClick={clickHandler} className="btnbutton">
            Next <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
