import {FC} from 'react';
import { Box, Container } from '@mui/material';

export const Contact: FC =()=> {
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
            <h1>Kontakt i dojazd</h1>
            <h3>telefon: +48 720 886 670</h3>
            <h3>mail: swidmedsp@gmail.com</h3>
            <Container sx={{
                    width: '100vw',
                    height: 650,
                    marginBottom: 1,
                    padding:0,
                    '@media(max-width: 576px)': { marginBottom: 0 }
                }}>
                <iframe className="gmap_iframe" width="100%" height='100%' src="https://maps.google.com/maps?width=1294&amp;height=575&amp;hl=en&amp;q=20-412 Lublin, ul. Kunickiego 46&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </Container>
        </Box>
    )
}