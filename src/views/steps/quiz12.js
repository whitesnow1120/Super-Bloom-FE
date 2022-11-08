import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";

import QuizHeader from "../../components/quizheader";

export default function Quizstep12() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  const clickHandler = () => {
    if (checked) {
      navigate("/screen-57f5661b");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 500);
    }
  };

  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: 6,
    width: 20,
    height: 20,
    borderColor: "",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 2px #A25CD9"
        : "inset 0 0 0 2px #A25CD9, inset 0 -1px 0 #A25CD9",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
        : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
      marginTop: "10",
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background:
        theme.palette.mode === "dark"
          ? "rgba(57,75,89,.5)"
          : "rgba(206,217,224,.5)",
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    alignItems: "center",
    display: "center",

    justifyContent: "center",
    backgroundImage: "linear-gradient(180deg, #A25CD9, #A25CD9)",
    "&:before": {
      display: "block",
      width: 12,
      height: 12,
      backgroundPosition: "center",
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#4e4096",
    },
  });

  const changeHandler = (e) => {
    let res = checked;
    setChecked(!res);
  };

  // Inspired by blueprintjs
  function BpCheckbox(props) {
    return (
      <Checkbox
        sx={{
          "&:hover": { bgcolor: "transparent" },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ "aria-label": "Checkbox demo" }}
        {...props}
      />
    );
  }

  return (
    <Box>
      <QuizHeader skip={"/screen-57f5661b"} skipBtn={false} />
      <Container>
        <Grid className="innerContainer">
          <Box className="mainCard" sx={{ mb: 2 }}>
            <Card className="welcomeBox">
              <Typography variant="h6" className="counterNumber">
                {" "}
                12
              </Typography>
              <Typography className="questionNumber">Question 12/15</Typography>
              <Typography variant="h5" className="questionHeading">
                Are You Ready To Commit To Feeling Happier?{" "}
              </Typography>
              <Typography className="description">
                Consistency and habits are the keys to success. Are you willing
                to commit to spending 5 minutes a day for the next 12 weeks to
                achieve your goals?{" "}
              </Typography>
            </Card>
          </Box>
          <Grid
            sx={{ mb: 4, mt: 4 }}
            className={error ? "horizontalShake" : ""}
          >
            <FormGroup className="outerCheckBox">
              <FormControlLabel
                className="customCheckBox"
                control={
                  <BpCheckbox
                    icon={<BpIcon />}
                    sx={{ pt: 4 }}
                    checkedIcon={<BpCheckedIcon />}
                    defaultChecked={checked}
                    onChange={changeHandler}
                  />
                }
                label="I Commit To My Happiness and I Will spend 5 Minutes A Day Improving Myself. "
              />
            </FormGroup>
          </Grid>

          <Button onClick={clickHandler} className="nextButton">
            I'm committed <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
