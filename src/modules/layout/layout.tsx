import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { Navbar } from './navbar/navbar';
import { Footer } from '../footer/footer';

export const MainLayout: FC = () => {
  return (
    <>
    <Navbar />
      <Box minHeight={'100vh'} position={'relative'} sx={{ padding: 0, margin: 0}}>
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
    </>
  );
};
