import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";

import QuizHeader from "../../components/quizheader";
import { SLEEPING_PATTENRS_LIST } from "../../constants";

export default function Quizstep10() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-f5e829bb");
  };

  const toggleHandler = (e) => {
    localStorage.setItem("sleepingPatterns", e.target.value);
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-f5e829bb"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                {" "}
                10
              </Typography>
              <Typography className="questionNumber">Question 10/15</Typography>
              <Typography variant="h5" className="questionHeading">
                How Are Your Sleeping Patterns?{" "}
              </Typography>
              <Typography className="description" sx={{ mb: 2 }}>
                There is nothing better than feeling rested! On the other hand,
                constantly feeling exhausted is no fun and is an important sign
                that something has to change in your routine.{" "}
              </Typography>
              <Typography className="description">
                Help us identify your sleeping habits!{" "}
              </Typography>
            </Card>
          </Box>
          <Grid sx={{ mt: 4, mb: 4 }}>
            <RadioGroup
              aria-labelledby="Quiz Answer"
              onChange={(e) => toggleHandler(e)}
              defaultValue={
                localStorage.getItem("sleepingPatterns") !== null
                  ? localStorage.getItem("sleepingPatterns")
                  : 1
              }
              size="lg"
              sx={{ gap: 1.4 }}
            >
              {Object.keys(SLEEPING_PATTENRS_LIST).map((index) => (
                <Sheet
                  className="inputBorder"
                  key={SLEEPING_PATTENRS_LIST[index]}
                  sx={{ px: 3, py: 1.7, borderRadius: "50px" }}
                >
                  <Radio
                    label={SLEEPING_PATTENRS_LIST[index]}
                    overlay
                    disableIcon
                    value={index}
                    componentsProps={{
                      label: ({ checked }) => ({
                        sx: {
                          fontWeight: "400",
                          fontSize: "16px",
                          color: checked ? "#fff" : "#000",
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            "--variant-borderWidth": "2px",
                            "&&": {
                              // && to increase the specificity to win the base :hover styles
                              borderColor: "#a25cd9",
                              backgroundColor: "#a25cd9",
                            },
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
              ))}
            </RadioGroup>
          </Grid>

          <Button onClick={clickHandler} className="nextButton">
            Next <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
