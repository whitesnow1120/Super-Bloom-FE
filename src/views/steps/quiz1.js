import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

import QuizHeader from "../../components/quizheader";

const listData = {
  "1": "Feel Happier",
  "2": "Practice Gratitude",
  "3": "Become More Kind To Myself",
  "4": "Make More Time For Myself",
  "5": "Reduce My Stress",
  "6": "Connect Better With Loved Ones",
  "7": "Go Out More",
  "8": "Let Go Of Negative Thoughts",
  "9": "Get More Rest",
  "10": "Get My Body Moving More Often",
};

export default function Quizstep1() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-fb8379a7");
  };

  const toggleHandler = (index) => {
    let dataOfStep1 = localStorage.getItem("mainGoals");
    if (dataOfStep1 !== null) {
      dataOfStep1 = dataOfStep1.split(",");
    } else {
      dataOfStep1 = [];
    }

    if (dataOfStep1.length === 1 && dataOfStep1[0] === "") {
      dataOfStep1 = [];
    }

    if (dataOfStep1.includes(index)) {
      const removeIndex = dataOfStep1.indexOf(index);
      if (removeIndex > -1) {
        dataOfStep1.splice(removeIndex, 1);
      }
    } else {
      dataOfStep1.push(index);
    }

    dataOfStep1 = dataOfStep1.join(",");
    localStorage.setItem("mainGoals", dataOfStep1);
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-fb8379a7"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                1
              </Typography>
              <Typography className="questionnumber">Question 1/15</Typography>
              <Typography variant="h5" className="quesheading">
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
                {Object.keys(listData).map((index) => (
                  <ListItem key={listData[index]} className="inputborder">
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
                      onChange={() => toggleHandler(index)}
                      defaultChecked={
                        localStorage.getItem("mainGoals") !== null &&
                        localStorage.getItem("mainGoals").includes(index)
                          ? true
                          : false
                      }
                      overlay
                      disableIcon
                      variant="soft"
                      label={listData[index]}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          <Button onClick={clickHandler} className="btnbutton">
            Let's achieve these goals{" "}
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
