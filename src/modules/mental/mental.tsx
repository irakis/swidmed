import {FC} from 'react';
import { Box } from '@mui/material';
import { Clinic } from '../clinic/clinic';
import { data } from './mental-data';


export const Mental: FC =()=> {
    return(
        <Box
            sx={{
                width: '100%',
                margin: 0,
                padding:0,
            }}
        >
            <Clinic
                title={data.title}
                alt={data.alt}
                text={data.text}
                url={data.url}
                items={data.items}
                items0={data.items0}
                text0={data.text0}
            />
        </Box>
    )
}