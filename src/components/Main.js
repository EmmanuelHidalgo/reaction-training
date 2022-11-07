import React, { useContext }  from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import '@fontsource/roboto/300.css';


import InitialSetup from './InitialSetup';
import TrainingGround from './TrainingGround'

import { reactionTrainingContext } from '../context/reactTrainingContext'

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const { techniques, time } = useContext(reactionTrainingContext);
  const maxSteps = 2;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getActiveComponent = (step) => {
    const mapping = {
      0: <InitialSetup />,
      1: <TrainingGround />,
    }

    return mapping[step]
  }

  return (
    <Container maxWidth="sm" sx={{ p: 0}}>
    <Box sx={{ height: '100vh', bgcolor: '#cfe8fc'}}>
        <Box sx={{ height: 255, width: '100%'}}>
        {getActiveComponent(activeStep)}
        </Box>
        <MobileStepper
        variant="text"
        steps={maxSteps}
        position="bottom"
        activeStep={activeStep}
        nextButton={
            <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1 || techniques.length === 0 || time === "" }
            >
            Next
            {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
            </Button>
        }
        backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
            Back
            </Button>
        }
        />
    </Box>
    </Container>
  );
}
