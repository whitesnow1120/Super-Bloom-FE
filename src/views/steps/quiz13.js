import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, Container, Grid, Typography } from "@mui/material";

import QuizHeader from "../../components/quizheader";
import loaderimg from "../../assets/img/loader.gif";

export default function Quizstep13() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/screen-f38e984f");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <QuizHeader skip={"/screen-f38e984f"} backBtn={false} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                13
              </Typography>
              <Typography className="questionnumber"></Typography>
              <Typography variant="h5" className="quesheading">
                We're Building Your Plan!{" "}
              </Typography>
            </Card>
          </Box>
          <Grid sx={{ mb: 4, mt: 4 }}>
            <img className="loader-img" src={loaderimg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
