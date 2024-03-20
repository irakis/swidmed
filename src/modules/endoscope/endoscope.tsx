import {FC} from 'react';
import { Box } from '@mui/material';
import { Clinic } from '../clinic/clinic';
import { data } from './endoscope-data';


export const Endoscope: FC =()=> {
    return(
        <Box
            sx={{
                width: '100%',
                margin: 0,
                padding:0,
            }}
        >
            <Clinic
                alt={data.alt}
                text={data.text}
                url={data.url}
                items={data.items}
            />
        </Box>
    )
}