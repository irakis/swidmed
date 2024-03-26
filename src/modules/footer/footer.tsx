import { Container, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';


export const Footer: FC =()=> {
    return(
             <Stack  sx={{display: 'block', alignItems: 'center', color: 'white', width: '100vw', bgcolor: '#4C8BBE', position: 'fixed', left: 0, bottom: 0}}>
                <Container sx={{justifyContent: 'center', alignContent: 'center', display: 'flex', gap: 2}}>
                    <Box sx={{display: 'flex', alignItems: 'center', color: 'white'}}>
                        <Link to='/contact'>
                            <FmdGoodOutlinedIcon sx={{fontSize: 32, margin: 1, color: 'white'}}></FmdGoodOutlinedIcon>
                        </Link>
                        <p>ul.Władysława Kunickiego 46<br></br>
                            20-412 Lublin
                        </p>
                    
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', color: 'white'}}>
                        <AlternateEmailOutlinedIcon sx={{fontSize: 32, margin: 1}}></AlternateEmailOutlinedIcon>
                        <p>swidmedsp@gmail.com</p>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', color: 'white'}}>
                        <PhoneAndroidOutlinedIcon sx={{fontSize: 32, margin: 1}}></PhoneAndroidOutlinedIcon>
                        <p>+ 48 720 886 670</p>
                    </Box>
                </Container>
                <Container sx={{display: 'flex', justifyContent: 'center', fontSize: 12, gap: 2}}>
                    <p>NIP 71234252278 / REGON 520149350</p>
                    <p>NUMER KSIĘGI REJESTROWEJ 000000270773</p>
                    <p>designed: auxiliumpro44@gmail.com</p>
                </Container>
            </Stack>
    )
};