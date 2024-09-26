import { Button, styled } from '@mui/material';

export const CustomButton = styled(Button)(
  ({
    direction,
    initialColor = 'initial',
  }: {
    direction?: string;
    initialColor?: string;
  }) => ({
    padding: '12px',
    backgroundColor: direction
      ? direction === 'sell'
        ? '#cb392f'
        : '#58a05c'
      : initialColor,
    '&:hover': {
      backgroundColor: direction
        ? direction === 'sell'
          ? '#a52f26'
          : '#478049'
        : initialColor,
    },
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    gap: '8px',
    '&:hover svg': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  })
);
