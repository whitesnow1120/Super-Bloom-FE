import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuizHeader from "../../components/quizheader";

export default function Quizstep7() {
  var navigate = useNavigate();
  const clickHandler = () => {
    navigate("/screen-3c87535a");
  };
  return (
    <Box>
      <QuizHeader skip={"/screen-3c87535a"} backBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                7
              </Typography>
              <Typography className="questionnumber">Question 7/15</Typography>
              <Typography variant="h5" className="quesheading">
                Share A Little About Your Starting Mindset{" "}
              </Typography>
              <Typography className="description">
                Don't forget: Your information is confidential and we won't
                share it!{" "}
              </Typography>
            </Card>
          </Box>

          <Button onClick={clickHandler} className="btnbutton">
            Ok <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
