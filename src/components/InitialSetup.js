import React, {useState, useContext}  from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GithubPicker  } from 'react-color'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './initialSetup.css';


import { reactionTrainingContext } from '../context/reactTrainingContext'
import TechniqueList from './general/TechniqueList';


const InitialSetup = () => {
 const [currentTechnique, setCurrentTechnique] = useState("");
 const [currentColor, setCurrentColor] = useState("#22194D");


 const { setTime, time, techniques, setTechniques } = useContext(reactionTrainingContext);

 const onCurrentTechniqueChange = (event) => {
    setCurrentTechnique(event.target.value);
 }

 const onSecondsOfTechniquesChange = (event) => {
    setTime(event.target.value)
 }

 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const onAddTechnique = () => {
    const newTechniqueArray = [...techniques, { name: currentTechnique, color: currentColor }]
    setTechniques(newTechniqueArray)
    setCurrentTechnique("")
    setOpen(false);
 }

 const onColorChange = (color) => {
    setCurrentColor(color.hex)
 }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

 return (
    <div className='main-container'>
        <div className='form'>
            <div className='form-header'>
                <Typography variant="h4" gutterBottom>
                    Round Setup
                </Typography>
            </div>
            <div className='form-content'>
                <div className='form-field'>
                    <TextField
                        id="time-techniques"
                        label="Seconds per iteration"
                        type="number"
                        variant="standard"
                        value={time}
                        onChange={onSecondsOfTechniquesChange}
                    />
                </div>
                <div className='action-button'>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" disabled={time === 0 || time === ""} onClick={handleOpen}>Add a technique</Button>
                    </Stack>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='form'>
                            <div className='form-header'>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Please enter the name of the technique
                                </Typography>
                            </div>
                            <div className='form-content'>
                                <div className='form-field'>
                                    <TextField
                                    id="technique-name"
                                    label="Technique"
                                    variant="standard"
                                    fullWidth 
                                    value={currentTechnique}
                                    onChange={onCurrentTechniqueChange}
                                    />
                                </div>
                                <div className='form-field'>
                                    <Typography variant="body1" gutterBottom>
                                        Asociated Color:
                                    </Typography>
                                </div>
                                <div className='form-field'>
                                    <GithubPicker  onChangeComplete={onColorChange}    />
                                </div>
                                <div className='action-button'>
                                    <Button disabled={currentTechnique === ""} variant="contained" onClick={onAddTechnique}>Add</Button>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
        <TechniqueList techniques={techniques}/>
    </div>
 )
}

export default InitialSetup