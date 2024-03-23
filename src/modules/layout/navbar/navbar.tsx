import { FC } from 'react';
import Link from '@mui/material/Link';
import { ListItemAvatar, Avatar} from '@mui/material';
import { useState } from 'react';
import { Container, List, ListItem, ListItemButton, Collapse, ListItemText, Box, Paper } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export const Navbar: FC =()=> {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return(
        <>
            <Box sx={{
                bgcolor: 'white',
                height: 20,
                width: '100%',
                display: 'flex',
                justifyContent:'end'                
            }}>
                <List sx={{ display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                    <ListItem>
                        <ListItemAvatar>
                            <Link href='#'>
                                <FacebookRoundedIcon sx={{ fontSize: 39 }} color='primary'/>
                            </Link>
                        </ListItemAvatar>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Link href='#'>
                                <img height={31} src='/logo/POL_BIP_icon.svg.png'/>
                            </Link>
                        </ListItemAvatar>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <img height={31} src='/logo/nfz_logo_A_kolor-min.jpg'/>
                        </ListItemAvatar>
                    </ListItem>
                </List>
            </Box>
        <Container
            sx={{
                bgcolor: 'white',
                height: 150,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',                
            }}
        >
            <Box>
                <Link color='#000000' underline='none' href='/'>
                    <img width='180px' src='/images/swidmed-logo.svg' alt='logo'/>
                </Link>
            </Box>
            <Box>
            <List component="nav" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-center'}}>
            <ListItem>
                <Link color='#000000' underline='none' href='/'>
                    <ListItemButton>Start</ListItemButton>
                </Link>
            </ListItem>
                <ListItem>
                    <ListItemButton onClick={handleClick}>
                            <ListItemText>Poradnie</ListItemText>
                            {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
               </ListItem>
               <Collapse in={open} timeout="auto" unmountOnExit  >    
                    <List component="div" disablePadding sx={{alignContent: 'flex-start', position: 'relative', top: 100}}>
                        <Paper elevation={3} sx={{position: 'relative', zIndex: 2}}>
                                <ListItem><Link color='#000000' underline='none' href='/endoscope_clinic'>Poradnia endoskopii</Link></ListItem>
                                <ListItem><Link color='#000000' underline='none' href='/gastro_clinic'>Poradnia gastroenterologiczna</Link></ListItem>
                                <ListItem><Link color='#000000' underline='none'href='/addiction_clinic'>Poradnia leczenia uzależnień</Link></ListItem>
                                <ListItem><Link color='#000000' underline='none' href='/sexual_clinic'>Poradnia seksuologiczna</Link></ListItem>
                                <ListItem><Link color='#000000' underline='none' href='/children_clinic'>Poradnia psychologiczna dla dzieci</Link></ListItem>
                                <ListItem><Link color='#000000' underline='none' href='/mental_clinic'>Poradnia zdrowia psychicznego</Link></ListItem>
                        </Paper>
                    </List>
                </Collapse>
               <ListItem>
                    <Link color='#000000' underline='none' href='/endo_workshop_clinic'>
                        <ListItemButton> Pracownia endoskopii</ListItemButton>
                    </Link>
                </ListItem>
               <ListItem>
                    <Link color='#000000' underline='none' href='/documents'>
                        <ListItemButton>Pliki do pobrania</ListItemButton>
                    </Link>
                </ListItem>
               <ListItem>
                    <Link color='#000000' underline='none' href='/form'>
                        <ListItemButton onClick={()=>setOpen(false)}>Rejestracja</ListItemButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link color='#000000' underline='none' href='/contact'>
                        <ListItemButton onClick={()=>setOpen(false)}>Kontakt</ListItemButton>
                    </Link>
                </ListItem>
            </List>
            </Box>
        </Container>
    </>
    )
}