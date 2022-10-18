import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";

import QuizHeader from "../../components/quizheader";

const listData = {
  "1": "Nope",
  "2": "Practice Mindfulness",
  "3": "Fuel My Body With Good Foods",
  "4": "Communicate My Feelings More",
};

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
      <QuizHeader skip={"/screen-3a39b32d"} backBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                6
              </Typography>
              <Typography className="questionnumber">Question 6/15</Typography>
              <Typography variant="h5" className="quesheading">
                Are There Other Goals You Want To Work On?{" "}
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
            Take me to happiness <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
