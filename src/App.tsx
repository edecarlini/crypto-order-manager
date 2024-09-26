import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import theme from './styles/theme';
import { queryClient } from './api/queryClient';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
