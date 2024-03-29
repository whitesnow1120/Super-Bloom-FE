import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";

import QuizHeader from "../../components/quizheader";
import { OTHER_GOALS_LIST } from "../../constants";

export default function Quizstep6() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-3a39b32d");
  };

  const toggleHandler = (e) => {
    localStorage.setItem("otherGoals", e.target.value);
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-3a39b32d"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                6
              </Typography>
              <Typography className="questionNumber">Question 6/15</Typography>
              <Typography variant="h5" className="questionHeading">
                Are There Other Goals You Want To Work On?
              </Typography>
            </Card>
          </Box>
          <Grid sx={{ mt: 4, mb: 4 }}>
            <RadioGroup
              aria-labelledby="Quiz Answer"
              onChange={(e) => toggleHandler(e)}
              defaultValue={
                localStorage.getItem("otherGoals") !== null
                  ? localStorage.getItem("otherGoals")
                  : "1"
              }
              size="lg"
              sx={{ gap: 1.4 }}
            >
              {Object.keys(OTHER_GOALS_LIST).map((index) => (
                <Sheet
                  className="inputBorder"
                  key={OTHER_GOALS_LIST[index]}
                  sx={{ px: 3, py: 1.7, borderRadius: "50px" }}
                >
                  <Radio
                    label={OTHER_GOALS_LIST[index]}
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
            Take me to happiness <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
