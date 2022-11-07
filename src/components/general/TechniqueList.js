import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


import './techniqueList.css';


const TechniqueList = ( {techniques} ) => {
    if (!techniques || techniques.length === 0){
        return (
            <div className='no-techniques-set'>
                <Typography variant="body1" gutterBottom>
                    There are no techniques set yet, please add the ones you need
                </Typography>
            </div>
        )
    }
    return (
        <div className='technique-list-container'>
            {techniques.map((technique) => {
                return (
                    <Card  sx={{ backgroundColor: technique.color, p: 2, marginBottom: 2 }}>
                        <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
                            {technique.name}
                        </Typography>
                    </Card>
                )
            })}
        </div>
    )
}

export default TechniqueList