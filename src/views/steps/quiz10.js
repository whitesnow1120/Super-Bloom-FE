import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuizHeader from "../../components/quizheader";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";

const listData = {
  "1": "I Wake Up Feeling Rested",
  "2": "I Don't Need An Alarm To Wake Up",
  "3": "I Wake Up Feeling Tired",
  "4": "I Wake Up Feeling Groggy",
  "5": "I Have A Hard Time Getting Out Of Bed.",
};

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
      <QuizHeader skip={"/screen-f5e829bb"} backBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                10
              </Typography>
              <Typography className="questionnumber">Question 10/15</Typography>
              <Typography variant="h5" className="quesheading">
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
              {Object.keys(listData).map((index) => (
                <Sheet
                  className="inputborder"
                  key={listData[index]}
                  sx={{ px: 3, py: 1.7, borderRadius: "50px" }}
                >
                  <Radio
                    label={listData[index]}
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

          <Button onClick={clickHandler} className="btnbutton">
            Next <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
