import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

import QuizHeader from "../../components/quizheader";
import { MAIN_GOALS_LIST } from "../../constants";

export default function Quizstep1() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-fb8379a7");
  };

  const toggleHandler = (index, e) => {
    const checked = e.target.checked;
    let dataOfStep1 = localStorage.getItem("mainGoals");
    if (dataOfStep1 !== null) {
      dataOfStep1 = dataOfStep1.split(",");
    } else {
      dataOfStep1 = [];
    }

    if (dataOfStep1.length === 1 && dataOfStep1[0] === "") {
      dataOfStep1 = [];
    }

    if (!checked) {
      const removeIndex = dataOfStep1.indexOf(index);
      if (removeIndex > -1) {
        dataOfStep1.splice(removeIndex, 1);
      }
    } else {
      if (!dataOfStep1.includes(index)) {
        dataOfStep1.push(index);
      }
    }

    dataOfStep1 = dataOfStep1.join(",");
    localStorage.setItem("mainGoals", dataOfStep1);
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-fb8379a7"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                {" "}
                1
              </Typography>
              <Typography className="questionNumber">Question 1/15</Typography>
              <Typography variant="h5" className="questionHeading">
                What's your #1 Goal?
              </Typography>
              <Typography className="description">
                Don't worry, you will be able to add more goals throughout this
                quiz!{" "}
              </Typography>
            </Card>
          </Box>
          <Grid sx={{ mt: 4, mb: 4 }}>
            <Box role="group" aria-labelledby="topping">
              <List size="lg" sx={{ gap: 1.4 }}>
                {Object.keys(MAIN_GOALS_LIST).map((index) => (
                  <ListItem
                    key={MAIN_GOALS_LIST[index]}
                    className="inputBorder"
                  >
                    <Checkbox
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
                                color: "#fff",
                                // && to increase the specificity to win the base :hover styles
                                borderColor: "#a25cd9",
                                backgroundColor: "#a25cd9",
                              },
                            }),
                          }),
                        }),
                      }}
                      onChange={(e) => toggleHandler(index, e)}
                      defaultChecked={
                        localStorage.getItem("mainGoals") !== null &&
                        localStorage.getItem("mainGoals").includes(index)
                          ? true
                          : false
                      }
                      overlay
                      disableIcon
                      variant="soft"
                      label={MAIN_GOALS_LIST[index]}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          <Button onClick={clickHandler} className="nextButton">
            Let's achieve these goals{" "}
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
