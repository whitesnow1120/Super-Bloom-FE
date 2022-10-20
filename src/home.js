import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import QuizHeader from "./components/quizheader";
import WelcomeQuiz from "./components/welcomeQuiz";

const Home = () => {
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
