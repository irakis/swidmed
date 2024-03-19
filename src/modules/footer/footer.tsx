import { Container, Box, Stack } from '@mui/material';
import { FC } from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';


export const Footer: FC =()=> {
    return(
        <Container maxWidth={false} disableGutters={true} sx={{bgcolor: '#4C8BBE', margin: 0,padding: 0}}>
            <Container sx={{
                padding: 3,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',                
            }}>
                <Box sx={{display: 'flex', alignItems: 'center', color: 'white'}}>
                    <FmdGoodOutlinedIcon sx={{fontSize: 40, margin: 3}}></FmdGoodOutlinedIcon>
                    <p>ul.Władysława Kunickiego 46<br></br>
                        20-412 Lublin</p>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', color: 'white'}}>
                    <AlternateEmailOutlinedIcon sx={{fontSize: 40, margin: 3}}></AlternateEmailOutlinedIcon>
                    <p>swidmedsp@gmail.com</p>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', color: 'white'}}>
                    <PhoneAndroidOutlinedIcon sx={{fontSize: 40, margin: 3}}></PhoneAndroidOutlinedIcon>
                    <p>+ 48 500 867 636</p>
                </Box>

            </Container>
            <Stack sx={{display: 'block', alignItems: 'center', padding: 3, color: 'white'}}>
                <p>NIP 71234252278 / REGON 520149350</p>
                <p>NUMER KSIĘGI REJESTROWEJ 000000270773</p>
            </Stack>
        </Container>
    )
};