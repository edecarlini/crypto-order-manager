import { ArrowForward } from '@mui/icons-material';
import { styled } from '@mui/material';

export const CustomArrow = styled(ArrowForward)(() => ({
  opacity: 0,
  transform: 'translateX(-10px)',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
}));
