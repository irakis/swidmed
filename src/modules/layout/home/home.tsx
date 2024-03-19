import {FC} from 'react';
import { Box, Container } from '@mui/material';
import ActionAreaCard from '../../card/card';
import { data } from '../../card/cards-data';

export const Home: FC =()=> {
    return(
        <Box
            sx={{
                width: '100%',
                margin: 0,
                padding:0,
            }}
        >
        <Box sx={{ overflow:'hidden', height: 400 }}>
            <img height='auto' width='100%' src='/images/patient.jpg' alt='clinic_1'/>
        </Box>
        <Box sx={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', bgcolor: '#f2f2f2'}} >
            {data.map(card=>{return(
                <Box sx={{padding: 2}}>
                    <ActionAreaCard url={card.url} title={card.title} text={card.text} alt={card.alt}/>
                </Box>
            )})}
        </Box>
           
        </Box>
    )
}