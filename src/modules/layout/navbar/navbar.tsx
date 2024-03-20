import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Container, List, ListItem, ListItemButton, Collapse, ListItemText, Box, Paper } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export const Navbar: FC =()=> {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return(
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
                <img width='180px' src='/images/swidmed-logo.svg' alt='logo'/>
            </Box>
            <Box>
            <List component="nav" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-center'}}>
                <ListItem>
                    <ListItemButton onClick={handleClick}>
                            <ListItemText>Poradnie</ListItemText>
                            {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
               </ListItem>
               <Collapse in={open} timeout="auto" unmountOnExit  >    
                    <List component="div" disablePadding sx={{alignContent: 'flex-start', position: 'relative', top: 100}}>
                        <Paper elevation={3} sx={{position: 'relative', zIndex: 2}}>
                                <ListItem><a href='/endoscope_clinic'>Poradnia endoskopii</a></ListItem>
                                <ListItem>Poradnia gastroenterologiczna</ListItem>
                                <ListItem>Poradnia leczenia uzależnień</ListItem>
                                <ListItem>Poradnia seksuplogiczna</ListItem>
                                <ListItem>Poradnia psychologiczna dla dzieci</ListItem>
                                <ListItem>Poradnia zdrowia psychicznego</ListItem>
                        </Paper>
                    </List>
                </Collapse>
               <ListItem>Pracownia endoskopii</ListItem>
               <ListItem>Pliki do pobrania</ListItem>
               <ListItem><Link to='form'>Rejestracja</Link></ListItem>
            </List>
            </Box>
        </Container>
    )
}