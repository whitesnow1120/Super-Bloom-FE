import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import QuizHeader from "../../components/quizheader";

import document from "../../assets/img/paper.png";
import password from "../../assets/img/password.png";
import active from "../../assets/img/activity.png";
import edit from "../../assets/img/edit-square.png";

export default function Quizstep14() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/screen-296bb8d5");
  };

  return (
    <Box>
      <QuizHeader skip={"/screen-296bb8d5"} skipBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                14
              </Typography>
              <Typography className="questionNumber">Question 14/15</Typography>
              <Typography variant="h5" className="questionHeading">
                How Our Program Works
              </Typography>
            </Card>
          </Box>
          <Grid sx={{ mb: 4, mt: 4 }}>
            <List sx={{ width: "100%" }}>
              <ListItem alignItems="flex-start" className="listingWorks">
                <img alt="Remy Sharp" src={document} />

                <ListItemText
                  className="titleWorks"
                  primary="Daily SMS Check-in"
                  secondary={
                    <React.Fragment>
                      {"Daily prompt to help you journal"}
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start" className="listingWorks">
                <img alt="Remy Sharp" src={edit} />

                <ListItemText
                  className="titleWorks"
                  primary="New Exercise Every Sunday"
                  secondary={
                    <React.Fragment>
                      {
                        "We'll help you build new skills with exercises and classes"
                      }
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start" className="listingWorks">
                <img alt="Remy Sharp" src={password} />
                <ListItemText
                  className="titleWorks"
                  primary="Secure and private"
                  secondary={
                    <React.Fragment>
                      {"Your data is protected and confidential"}
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start" className="listingWorks">
                <img alt="Remy Sharp" src={active} />
                <ListItemText
                  className="titleWorks"
                  primary="Progress Tracking"
                  secondary={
                    <React.Fragment>
                      {
                        "View your progress over time, this is Key to stay motivated"
                      }
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Button onClick={clickHandler} className="nextButton">
            Continue <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
