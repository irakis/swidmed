import {FC} from 'react';
import { Box } from '@mui/material';

export const Home: FC =()=> {
    return(
        <Box
            sx={{
                bgcolor: 'yellow',
                height: 400
            }}
        
        >
            Hello all!
        </Box>
    )
}