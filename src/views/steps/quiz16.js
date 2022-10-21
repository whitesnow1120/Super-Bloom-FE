import React, { useState } from "react";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import QuizHeader from "../../components/quizheader";
import document from "../../assets/img/paper.png";
import { stripeApi } from "../../services";
import {
  MAIN_GOALS_LIST,
  OTHER_GOALS_LIST,
  SLEEPING_PATTENRS_LIST,
} from "../../constants";

export default function Quizstep16() {
  const [loading, setLoading] = useState(false);

  const mainGoalIndexes =
    localStorage.getItem("mainGoals") !== null
      ? localStorage.getItem("mainGoals").split(",")
      : [];
  const otherGoalIndex = localStorage.getItem("otherGoals");
  const badDays = localStorage.getItem("badDays");
  const goodDays = localStorage.getItem("goodDays");
  const sleepingPatternIndex = localStorage.getItem("sleepingPatterns");
  const journaling = localStorage.getItem("journaling");

  const clickHandler = async () => {
    setLoading(true);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const params = {
      mainGoals: localStorage.getItem("mainGoals"),
      otherGoals: localStorage.getItem("otherGoals"),
      badDays: localStorage.getItem("badDays"),
      goodDays: localStorage.getItem("goodDays"),
      sleepingPatterns: localStorage.getItem("sleepingPatterns"),
      journaling: localStorage.getItem("journaling"),
      tz,
    };
    const response = await stripeApi(params);
    if (response && response.status < 300) {
      const url = response.data.url;
      window.open(url, "_blank");
    } else {
      console.log("--- error ---", response.data.message);
    }
    setLoading(false);
  };
  return (
    <Box>
      <QuizHeader skipBtn={false} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography className="questionnumber">Excellent !!!</Typography>
              <Typography variant="h5" className="quesheading">
                Feel free to update your choice if needed
              </Typography>
            </Card>
          </Box>
          <Grid sx={{ mb: 4, mt: 4 }}>
            <List sx={{ width: "100%" }}>
              <ListItem alignItems="flex-start" className="lsitingwekkend">
                <img alt="Remy Sharp" src={document} />

                <ListItemText
                  className="titleworks"
                  primary="What's your #1 Goal?"
                  secondary={
                    <React.Fragment>
                      {mainGoalIndexes.map((index) => (
                        <Typography>- {MAIN_GOALS_LIST[index]}</Typography>
                      ))}
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start" className="lsitingwekkend">
                <img alt="Remy Sharp" src={document} />

                <ListItemText
                  className="titleworks"
                  primary="Are There Other Goals You Want To Work On? "
                  secondary={
                    <React.Fragment>
                      <Typography>
                        {otherGoalIndex !== null
                          ? "- " + OTHER_GOALS_LIST[otherGoalIndex]
                          : ""}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start" className="lsitingwekkend">
                <img alt="Remy Sharp" src={document} />
                <ListItemText
                  className="titleworks"
                  primary={`In A Typical Week, How Many "Bad" Days Do You Have?`}
                  secondary={
                    <React.Fragment>
                      <Typography>{badDays !== null ? badDays : 0}</Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start" className="lsitingwekkend">
                <img alt="Remy Sharp" src={document} />
                <ListItemText
                  className="titleworks"
                  primary={`In A Typical Week, How Many Good Days Do You Have?`}
                  secondary={
                    <React.Fragment>
                      <Typography>
                        {goodDays !== null ? goodDays : 0}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start" className="lsitingwekkend">
                <img alt="Remy Sharp" src={document} />
                <ListItemText
                  className="titleworks"
                  primary="How Are Your Sleeping Patterns? "
                  secondary={
                    <React.Fragment>
                      <Typography>
                        {sleepingPatternIndex !== null
                          ? "- " + SLEEPING_PATTENRS_LIST[sleepingPatternIndex]
                          : ""}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start" className="lsitingwekkend">
                <img alt="Remy Sharp" src={document} />
                <ListItemText
                  className="titleworks"
                  primary="How Experienced Are You With Journaling?"
                  secondary={
                    <React.Fragment>
                      {journaling !== null ? journaling : 0}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          {!loading ? (
            <Button onClick={clickHandler} className="btnbutton">
              Start Trial <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </Button>
          ) : (
            <Grid className="dotGroup">
              <Grid className="dot"></Grid>
              <Grid className="dot"></Grid>
              <Grid className="dot"></Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
