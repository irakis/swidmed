import {FC} from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import Parser from 'html-react-parser';

interface Props {
    alt: string;
    text: string;
    text0: string;
    url: string;
    items: string[];
    items0: string[]
}

export const Clinic: FC<Props> =(data)=> {
    return(
        <Box
            sx={{
                width: '100%',
                margin: 0,
                padding:0,
            }}
        >
            <Box sx={{ overflow:'hidden', height: 400 }}>
                <img height='auto' width='100%' src={data.url} alt={data.alt}/>
            </Box>
            <Box sx={{justifyItems: 'center'}}>
                <h1>ŚWIDMED Centrum Usług Medycznych</h1>
                <h3>Jesteśmy nowoczesną placówką oferującą usługi z zakresu ochrony zdrowia w ramach sześciu różnych poradni</h3>
                <p>{Parser(data.text)}</p>
                {data.items ? 
                    <List sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                        {data.items?.map((item: any)=>{return(
                        <ListItem sx={{maxWidth: 620}}>
                            <ListItemIcon>
                                <MedicalServicesOutlinedIcon sx={{fontSize: 35, color: '#F15A29'}}/>
                            </ListItemIcon>
                            <ListItemText sx={{textAlign: 'left', paddingLeft: 6}}>
                                {item}
                            </ListItemText>
                        </ListItem>
                        )})}
                    </List>
                : null}
                <br></br>
                {data.text0 !=='' ? <p>{Parser(data.text0)}</p> : null}
                {data.items0.length !== 0 ? 
                    <List sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                        {data.items0?.map((item: any)=>{return(
                        <ListItem sx={{maxWidth: 620}}>
                            <ListItemIcon>
                                <MedicalServicesOutlinedIcon sx={{fontSize: 35, color: '#F15A29'}}/>
                            </ListItemIcon>
                            <ListItemText sx={{textAlign: 'left', paddingLeft: 6}}>
                                {item}
                            </ListItemText>
                        </ListItem>
                        )})}
                    </List>
                : null}
            </Box>
           
        </Box>
    )
}