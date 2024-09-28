import fetchCryptoPrice from '@/api/cryptoAPI';
import { Order } from '@/types/order';
import { cryptos } from '@/utils/cryptos/referenceCrypto';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { CustomButton } from '../Button/CustomButton';
import { CustomArrow } from '../Button/Icon/CustomArrow';

const schema = yup.object().shape({
  id: yup.string().required(),
  direction: yup
    .string()
    .oneOf(['buy', 'sell'])
    .required('Direction is required'),
  crypto: yup.string().required('Crypto is required'),
  quantity: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === '' ? undefined : value
    )
    .typeError('Quantity must be a number')
    .positive('Quantity must be positive number')
    .required('Quantity is required'),
  usdEquivalent: yup.number().required(),
  expirationDate: yup
    .string()
    .required('Expiration date is required')
    .test('is-future', 'Expiration date must be in the future', (value) => {
      return value ? new Date(value) >= new Date() : false;
    }),
});

const OrderForm = ({
  defaultValues,
  onSubmit,
  onDiscard,
}: {
  defaultValues?: Order;
  onSubmit: (data: Order) => void;
  onDiscard: () => void;
}) => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Order>({
    defaultValues: defaultValues || {
      id: uuidv4(),
      direction: 'buy',
      crypto: '',
      quantity: 0,
      usdEquivalent: 0,
      expirationDate: '',
    },
    resolver: yupResolver<Order>(schema),
  });

  const cryptoId = watch('crypto');
  const quantity = watch('quantity');
  const direction = watch('direction');
  const usdEquivalent = watch('usdEquivalent') || 0;

  const { data: price, isLoading } = useQuery({
    queryKey: ['cryptoPrice', cryptoId],
    queryFn: () => fetchCryptoPrice(cryptoId),
    enabled: !!cryptoId,
    staleTime: 60000,
  });

  const onFormSubmit = (data: Order) => {
    onSubmit(data);
    reset({
      id: uuidv4(),
      direction: 'buy',
      crypto: '',
      quantity: 0,
      usdEquivalent: 0,
      expirationDate: '',
    });
  };

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    } else {
      reset({
        id: uuidv4(),
        direction: 'buy',
        crypto: '',
        quantity: 0,
        usdEquivalent: 0,
        expirationDate: '',
      });
    }
  }, [defaultValues, reset]);

  useEffect(() => {
    if (price && quantity) {
      const total = price * quantity;
      setValue('usdEquivalent', total);
    }
  }, [price, quantity, setValue]);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Controller
        name='direction'
        control={control}
        render={({ field }) => (
          <>
            You're
            <ToggleButtonGroup
              {...field}
              exclusive
              onChange={(_e, value) => {
                if (value === null) return;
                return field.onChange(value);
              }}
              color={direction === 'sell' ? 'error' : 'success'}
            >
              <ToggleButton
                value='buy'
                sx={{
                  ':hover': {
                    borderColor: '#58a05c',
                    backgroundColor: '#58a05c',
                  },
                }}
              >
                buying
              </ToggleButton>
              <ToggleButton
                value='sell'
                sx={{
                  ':hover': {
                    borderColor: '#cb392f',
                    backgroundColor: '#cb392f',
                  },
                }}
              >
                selling
              </ToggleButton>
            </ToggleButtonGroup>
          </>
        )}
      />
      <FormControl fullWidth margin='normal' error={!!errors.crypto}>
        <InputLabel id='crypto-label'>Crypto</InputLabel>
        <Controller
          name='crypto'
          control={control}
          render={({ field }) => (
            <Select {...field} labelId='crypto-label' label='Crypto'>
              {cryptos?.map((crypto) => (
                <MenuItem key={crypto.id} value={crypto.id}>
                  {crypto.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors.crypto && (
          <Typography
            variant='h6'
            sx={{ fontWeight: 400, paddingLeft: '16px', color: '#f44336' }}
          >
            {errors.crypto.message}
          </Typography>
        )}
      </FormControl>
      <Controller
        name='quantity'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type='number'
            label='Quantity'
            fullWidth
            margin='normal'
            error={!!errors.quantity}
            helperText={errors.quantity ? errors.quantity.message : ''}
            disabled={!cryptoId}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              cursor: !cryptoId ? 'not-allowed' : 'auto',
            }}
          />
        )}
      />
      <Box position={'relative'}>
        <TextField
          label='Equivalent in USD'
          value={isLoading ? '' : usdEquivalent.toFixed(2)}
          fullWidth
          margin='normal'
          slotProps={{
            input: {
              readOnly: true,
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              ),
            },
          }}
          disabled
        />
        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              top: '50%',
              left: '30px',
              transform: 'translateY(-25%)',
              alignItems: 'baseline',
            }}
          >
            <Skeleton variant='rounded' width={40} height={24} />
            .
            <Skeleton variant='rounded' width={20} height={24} />
          </Box>
        )}
      </Box>
      <Controller
        name='expirationDate'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type='datetime-local'
            label='Expiration date'
            fullWidth
            margin='normal'
            error={!!errors.expirationDate}
            helperText={
              errors.expirationDate
                ? errors.expirationDate.message
                : 'It will be translated to UTC'
            }
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        )}
      />
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        marginTop={'16px'}
        gap={'16px'}
      >
        <CustomButton
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          direction={direction}
          fullWidth
        >
          <Typography variant='h4'>
            {defaultValues ? 'Update order' : 'Create order'}
          </Typography>
          <CustomArrow />
        </CustomButton>
        {defaultValues && (
          <CustomButton
            variant='outlined'
            color='info'
            size='large'
            onClick={onDiscard}
            fullWidth
          >
            <Typography variant='h4'>Discard</Typography>
          </CustomButton>
        )}
      </Box>
    </form>
  );
};

export default OrderForm;
