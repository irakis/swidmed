import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Stack } from '@mui/material';
import { Navbar } from './navbar/navbar';

export const MainLayout: FC = () => {
  return (
    <Box minHeight={'100vh'} position={'relative'}>
      <Navbar />
      <Stack
        flexDirection="column"
        spacing={0}
        sx={{
          pl: '280px',
          pt: '64px',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            pt: '1rem',
          }}
        >
            Hello!
          <Outlet />
        </Container>
      </Stack>
    </Box>
  );
};
