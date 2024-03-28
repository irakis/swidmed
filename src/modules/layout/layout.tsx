import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Stack } from '@mui/material';
import { Navbar } from './navbar/navbar';
import { Footer } from '../footer/footer';


export const MainLayout: FC = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{padding: 0, margin: 0}}>
        <Navbar />
        <Box  sx={{ padding: 0, marginTop: 16, '@media(max-width: 576px)': {marginTop: 0}}}>
          <Stack
            flexDirection="column"
            spacing={0}
            sx={{
              padding: 0,
              margin: 0,
            }}
          >  
              <Outlet />
          </Stack>
        </Box>
      <Footer/>
    </Container>
  );
};
