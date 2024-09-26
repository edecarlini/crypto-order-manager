import React from 'react';
import { Snackbar, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbarStore } from '@/store/useSnackbarStore';

const CustomSnackbar: React.FC = () => {
  const { open, message, severity, duration, showCloseIcon, closeSnackbar } =
    useSnackbarStore();

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    closeSnackbar();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration !== null ? duration : undefined}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        severity={severity}
        sx={{ width: '100%' }}
        action={
          showCloseIcon ? (
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={handleClose}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          ) : null
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
