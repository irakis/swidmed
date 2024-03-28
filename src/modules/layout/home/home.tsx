import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import ActionAreaCard from '../../card/card';
import { data } from '../../card/cards-data';

export const Home: FC =()=> {
    return(
        <Box
            sx={{
                width: '100%',
                margin: 0,
                padding:0,
                marginBottom: 12,
                '@media(max-width: 576px)': { marginBottom: 0 }
            }}
        >
            <Box sx={{ overflow:'hidden', height: 400, objectFit: 'cover', '@media(max-width: 576px)': { height: 'auto' } }}>
                <img height='auto' width='100%' src='/images/patient.avif' alt='clinic_1'/>
            </Box>
            <Box>
                <h1>ŚWIDMED Centrum Usług Medycznych</h1>
                <p>Jesteśmy nowocesną placówką oferującą usługi z zakresu ochrony zdrowia w ramach sześciu różnych poradni</p>
            </Box>
            <Box sx={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', bgcolor: '#f2f2f2'}} >
                {data.map(card=>{return(
                    <Box sx={{padding: 2}}>
                        <Link to={card.link}>
                            <ActionAreaCard url={card.url} title={card.title} text={card.text} alt={card.alt}/>
                        </Link>
                    </Box>
                )})}
            </Box>
           
        </Box>
    )
}