import {FC} from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';

interface Props {
    alt: string;
    text: string;
    url: string;
    items: string[]
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
                <p>Jesteśmy nowocesną placówką oferującą usługi z zakresu ochrony zdrowia w ramach sześciu różnych poradni</p>
                <p>{data.text}</p>
                <List sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                    {data.items?.map((item: any)=>{return(
                    <ListItem sx={{maxWidth: 620}}>
                        <ListItemIcon>
                            <MedicalServicesOutlinedIcon sx={{fontSize: 35, color: '#F15A29'}}/>
                        </ListItemIcon>
                        <ListItemText sx={{textAlign: 'center'}}>
                            {item}
                        </ListItemText>
                    </ListItem>
                    )})}
                </List>
            </Box>
           
        </Box>
    )
}