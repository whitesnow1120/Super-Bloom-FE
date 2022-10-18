import React from 'react';
import { Box, Container, Stack, Typography } from "@mui/material";
import QuizHeader from "./components/quizheader";
import WelcomeQuiz from './components/welcomeQuiz';

class Home extends React.Component {
    render() {
        return (
            <>
            <Box className="welcomheader">
                <Stack>
                    <QuizHeader backBtn={false} />
                    <WelcomeQuiz />
                </Stack>
               
            </Box>
             <Container className='privacypolicy'>
             <Typography>
                 Learn more in our <a>Privacy Policy</a>
             </Typography>
         </Container>
            </>
        );
    }
}

export default Home;