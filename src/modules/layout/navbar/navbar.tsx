import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, ListItemAvatar } from '@mui/material';
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
        <AppBar position='fixed' color='inherit'>
            <Box sx={{
                bgcolor: 'white',
                width: '100%',
                display: 'flex',
                justifyContent:'end'                
            }}>
                <List sx={{ display: 'flex', flexDirection:'row', alignItems: 'center', padding: 0}}>
                    <ListItem>
                        <ListItemAvatar>
                            <Link to='#'>
                                <FacebookRoundedIcon sx={{ fontSize: 39 }} color='primary'/>
                            </Link>
                        </ListItemAvatar>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Link to='#'>
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
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: 0          
            }}
        >
            <Box>
                <Link color='#000000' to='/'>
                    <img width='180px' src='/images/swidmed-logo.svg' alt='logo'/>
                </Link>
            </Box>
            <Box>
            <List component="nav" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-center'}}>
                <ListItem>
                    <Link color='black' to='/'>
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
                    <List component="div" disablePadding sx={{alignContent: 'flex-start'}}>
                        <Paper elevation={3} sx={{position: 'relative', zIndex: 2}}>
                                <ListItem><Link onClick={handleClick} to='/endoscope_clinic'>Poradnia endoskopii</Link></ListItem>
                                <ListItem><Link onClick={handleClick} to='/gastro_clinic'>Poradnia gastroenterologiczna</Link></ListItem>
                                <ListItem><Link onClick={handleClick} to='/addiction_clinic'>Poradnia leczenia uzależnień</Link></ListItem>
                                <ListItem><Link onClick={handleClick} to='/sexual_clinic'>Poradnia seksuologiczna</Link></ListItem>
                                <ListItem><Link onClick={handleClick} to='/children_clinic'>Poradnia psychologiczna dla dzieci</Link></ListItem>
                                <ListItem><Link onClick={handleClick} to='/mental_clinic'>Poradnia zdrowia psychicznego</Link></ListItem>
                        </Paper>
                    </List>
                </Collapse>
               <ListItem>
                    <Link color='#000000' to='/endo_workshop_clinic'>
                        <ListItemButton> Pracownia endoskopii</ListItemButton>
                    </Link>
                </ListItem>
               <ListItem>
                    <Link color='#000000' to='/documents'>
                        <ListItemButton>Pliki do pobrania</ListItemButton>
                    </Link>
                </ListItem>
               <ListItem>
                    <Link color='#000000' to='/form'>
                        <ListItemButton onClick={()=>setOpen(false)}>Rejestracja</ListItemButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link color='#000000' to='/contact'>
                        <ListItemButton onClick={()=>setOpen(false)}>Kontakt</ListItemButton>
                    </Link>
                </ListItem>
            </List>
            </Box>
        </Container>
    </AppBar>
    )
}