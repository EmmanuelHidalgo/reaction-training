import React, {useContext, useState}  from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


import { reactionTrainingContext } from '../context/reactTrainingContext'


import './trainingGround.css';


const TrainingGround = () => {
 const { time, techniques } = useContext(reactionTrainingContext);
 const [isPlaying, setIsPlaying] = useState(false)
 const [currentTechnique, setCurrentTechnique] = useState({name: '', color: '#cfe8fc'})
 const [intervalId, setIntervalId] = useState(0);


 const numberOfTechniques = techniques.length

 const play = () => {
    setIsPlaying(!isPlaying)
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        return;
      }

      const newIntervalId = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * numberOfTechniques) + 1;
        setCurrentTechnique(techniques[randomNumber - 1])
      }, time * 1000);
      setIntervalId(newIntervalId);
    
 }

 return (
    <Container maxWidth="sm" sx={{ p: 0 }}>
        <Box sx={{ bgcolor: currentTechnique.color, height: '100vh', p: 2 }}>
            <div className='training-ground-container'>
                <Typography variant="h4">
                    Training Ground
                </Typography>
                <div className='technique-info'>
                    <Typography variant="h2" gutterBottom>
                        {currentTechnique.name}
                    </Typography>
                    <div className='actions'>
                    {
                        (isPlaying ? <PauseIcon onClick={play} sx={{ fontSize: 100 }} /> : <PlayArrowIcon onClick={play} sx={{ fontSize: 100 }} />)
                    }
                    </div>
                </div>
            </div>
        </Box>
    </Container>
 )
}

export default TrainingGround