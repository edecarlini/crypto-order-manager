import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '40px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '32px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '20px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '16px',
      fontWeight: 600,
    },
    h5: {
      fontSize: '14px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '12px',
      fontWeight: 600,
    },
  },
});

const theme = createTheme(baseTheme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          [baseTheme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '32px',
          margin: '16px',
          minHeight: 300,
          minWidth: 200,
          maxWidth: 600,
          maxHeight: 610,
          borderRadius: 16,
          boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          paddingLeft: 8,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          maxHeight: 16,
          textTransform: 'none',
          borderRadius: 16,
          ':active': {
            backgroundColor: '#f66754',
          },
          ':hover': {
            backgroundColor: '#8a8888',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '8px !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
