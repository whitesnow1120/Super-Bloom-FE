import React, { useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import QuizHeader from "./components/quizheader";
import WelcomeQuiz from "./components/welcomeQuiz";

const Home = () => {
  useEffect(() => {
    const currentTimeStamp = Math.round(new Date().getTime() / 1000);
    const startedTimeStamp = localStorage.getItem("startedTimeStamp");
    if (
      startedTimeStamp !== null &&
      parseInt(startedTimeStamp) < currentTimeStamp - 2000
    ) {
      localStorage.clear();
    }
    localStorage.setItem("startedTimeStamp", currentTimeStamp);
  }, []);

  return (
    <>
      <Box className="welcomheader">
        <Stack>
          <QuizHeader skipBtn={false} />
          <WelcomeQuiz />
        </Stack>
      </Box>
      <Container className="privacypolicy">
        <Typography>
          Learn more in our <a>Privacy Policy</a>
        </Typography>
      </Container>
    </>
  );
};

export default Home;
