import React, { useState } from "react";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import QuizHeader from "../../components/quizheader";

import plusaco from "../../assets/img/plusicon.png";
import closeaco from "../../assets/img/closeicon.png";

import { stripeApi } from "../../services";

export default function Quizstep15() {
  const [loading, setLoading] = useState(true);

  const clickHandler = async () => {
    setLoading(true);
    const params = {
      mainGoals: localStorage.getItem("mainGoals"),
      otherGoals: localStorage.getItem("otherGoals"),
      badDays: localStorage.getItem("badDays"),
      goodDays: localStorage.getItem("goodDays"),
      sleepingPatterns: localStorage.getItem("sleepingPatterns"),
      journaling: localStorage.getItem("journaling"),
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

  const CustomExpandIcon = () => {
    return (
      <Box
        sx={{
          ".Mui-expanded & > .collapsIconWrapper": {
            display: "none",
          },
          ".expandIconWrapper": {
            display: "none",
          },
          ".Mui-expanded & > .expandIconWrapper": {
            display: "block",
          },
        }}
      >
        <div className="expandIconWrapper">
          <img src={closeaco}></img>
        </div>
        <div className="collapsIconWrapper">
          <img src={plusaco}></img>
        </div>
      </Box>
    );
  };

  return (
    <Box>
      <QuizHeader backBtn={true} />
      <Container>
        <Grid className="innerContainer">
          <Box className="maincard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counternumber">
                {" "}
                15
              </Typography>
              <Typography className="questionnumber">Question 15/15</Typography>
              <Typography variant="h5" className="quesheading">
                Frequently Asked Questions{" "}
              </Typography>
            </Card>
          </Box>

          <Grid sx={{ mt: 4, mb: 4 }}>
            <Accordion className="customeaccodina">
              <AccordionSummary
                sx={{ pr: 0, pl: 2 }}
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography className="accodianheader">
                  Is there a limit on how much
                  <br /> I can message coaches?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accodiandesc">
                  No! Our coaches are here to help. We encourage you to reach
                  out to our coaches as much as you need. They are liscensed
                  psychologists and there is no extra cost for contacting them!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="customeaccodina">
              <AccordionSummary
                sx={{ pr: 0, pl: 2 }}
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accodianheader">
                  How Much Does it Cost?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accodiandesc">
                  Super Bloom's Program is only $8.25/Month ($99/Y). This is
                  much cheaper than traditional experts ($120/H).
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="customeaccodina">
              <AccordionSummary
                sx={{ pr: 0, pl: 2 }}
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accodianheader">
                  Who Built the Program?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accodiandesc">
                  Our program is built and reviewed by experts that work on
                  people's happiness journeys.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="customeaccodina">
              <AccordionSummary
                sx={{ pr: 0, pl: 2 }}
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accodianheader">
                  Do you offer a Free Trial?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accodiandesc">
                  Yes! Our program is completely free for the first 2 weeks.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="customeaccodina">
              <AccordionSummary
                sx={{ pr: 0, pl: 2 }}
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accodianheader">
                  What is your refund policy?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accodiandesc">
                  If you do not feel like our program is a good match for you,
                  just text your coach and we will offer you a full refund. No
                  questions asked.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

          {loading ? (
            <Grid className="dotGroup">
              <Grid className="dot"></Grid>
              <Grid className="dot"></Grid>
              <Grid className="dot"></Grid>
            </Grid>
          ) : (
            <Button onClick={clickHandler} className="btnbutton">
              Start Trial <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </Button>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
