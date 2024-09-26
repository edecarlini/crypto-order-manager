import { useOrderStore } from '@/store/useOrderStore';
import { useSnackbarStore } from '@/store/useSnackbarStore';
import { Order } from '@/types/order';
import { getCodeByCryptoId } from '@/utils/cryptos/getCodeByCryptoId';
import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const OrderListCard = ({ onEdit }: { onEdit: (order: Order) => void }) => {
  const { orders, deleteOrder } = useOrderStore();
  const { showSnackbar } = useSnackbarStore();

  const onDelete = (id: string) => {
    deleteOrder(id);
    showSnackbar({
      message: 'Order deleted successfully',
      severity: 'info',
      duration: 5000,
      showCloseIcon: true,
    });
  };

  return orders?.map((order) => (
    <ListItem
      key={order.id}
      sx={{
        backgroundColor: 'rgba(200,200,200,0.2)',
        borderRadius: 2,
        marginBottom: 2,
      }}
      secondaryAction={
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <IconButton edge='end' onClick={() => onEdit(order)}>
            <Edit />
          </IconButton>
          <IconButton
            edge='end'
            onClick={() => {
              onDelete(order.id);
            }}
          >
            <Delete />
          </IconButton>
        </Box>
      }
    >
      <ListItemText
        primary={
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography
              variant='h6'
              sx={{
                backgroundColor:
                  order.direction === 'sell' ? '#cb392f' : '#58a05c',
                width: 'fit-content',
                padding: '4px 8px',
                borderRadius: 8,
              }}
            >
              {order.direction.toUpperCase()}
            </Typography>
            <Typography variant='h3'>
              {order.quantity} {getCodeByCryptoId(order?.crypto)}
            </Typography>
          </Box>
        }
        secondary={
          <>
            USD {order.usdEquivalent.toFixed(2)} <br />
            Expires: {new Date(order.expirationDate).toUTCString()}
          </>
        }
      />
    </ListItem>
  ));
};

export default OrderListCard;
