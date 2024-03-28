import {FC} from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';


export const Documents: FC =()=> {
    return(
        <Box
            sx={{
                width: '100%',
                margin: 0,
                padding:0,
            }}
        >
              <h1>Pliki do pobrania</h1>
              <h3>Zapoznaj się z procedurami przed skorzystaniem z zabiegu</h3>
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 6}}>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Link to='/documents/Ankieta Anestezjologiczna.pdf' target='blank' style={{ color: 'black' }}>
                            <ListItemText
                                primary="Ankieta anestezjologiczna"
                            />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Link to='/documents/Zasady korzystania z psychoterapii.pdf' target='blank' style={{ color: 'black' }}>
                            <ListItemText
                                primary="Zasady korzystania z psychoterapii"
                            />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Link to='/documents/Oświadczenie pacjenta-przedstawiciela.pdf' target='blank' style={{ color: 'black' }}>
                            <ListItemText
                                primary="Oświadczenie pacjenta lub przedstawiciela ustawowego"
                            />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Link to='/documents/Polityka Prywatności.pdf' target='blank' style={{ color: 'black' }}>
                            <ListItemText
                                primary="Polityka prywatności"
                            />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <Link to='/documents/Wniosek-o-dokumentacje-medyczna.pdf' target='blank' style={{ color: 'black' }}>
                            <ListItemText
                                primary="Wniosek o dokumentację medyczną"
                            />
                        </Link>
                    </ListItem>                
                </List>
            </Box>
            <Box sx={{ marginBottom: 10, '@media(max-width: 576px)': {marginBottom: 0, height: 'auto'} }}>
                <img height='auto' width='100%' src='/images/team.avif' alt='team'/>
            </Box>
        </Box>
    )
}