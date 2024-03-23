import {FC} from 'react';
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
                        <ListItemText
                            primary="Ankieta anestezjologiczna"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Zasady korzystania z psychoterapii"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oświadczenie pacjenta lub przedstawiciela ustawowego"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Polityka prywatności"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Przygotowanie do zabiegu"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Single-line item"
                        />
                    </ListItem>
                
                </List>
            </Box>
       
            <Box  sx={{ overflow:'hidden', height: 400 }}>
                <img height='auto' width='100%' src='/images/team.jpg' alt='team'/>
            </Box>
        </Box>
    )
}