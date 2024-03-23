import {FC} from 'react';
import { Box } from '@mui/material';



export const Contact: FC =()=> {
    return(
        <Box
            sx={{
                width: '100%',
                margin: 0,
                padding:0,
            }}
            
        >
            <h1>Kontakt i dojazd</h1>
            <h3>telefon: +48 720 886 670</h3>
            <h3>mail: swidmedsp@gmail.com</h3>
        <Box sx={{
                width: '100%',
                height: 650,
                margin: 0,
                padding:0,
            }}>
            <iframe className="gmap_iframe" width="100%" height='100%' src="https://maps.google.com/maps?width=1294&amp;height=575&amp;hl=en&amp;q=20-412 Lublin, ul. Kunickiego 46&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </Box>
        </Box>
    )
}