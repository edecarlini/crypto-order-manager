import { useOrderStore } from '@/store/useOrderStore';
import { Order } from '@/types/order';
import { Box, List, Typography } from '@mui/material';
import OrderListCard from './OrderListCard';

const OrderList = ({
  onEdit,
  editingOrder,
}: {
  onEdit: (order: Order) => void;
  editingOrder: Order | null;
}) => {
  const { orders } = useOrderStore();

  const emptyOrders = orders?.length === 0;

  return (
    <Box
      sx={{
        overflowY: 'auto',
        maxHeight: editingOrder ? '490px' : '430px',
        paddingRight: '12px',
      }}
    >
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {emptyOrders ? (
          <Typography variant='h4'>
            Here you will see all your orders. <br />
            Start by creating one, then you can edit or delete them.
          </Typography>
        ) : (
          <OrderListCard onEdit={onEdit} />
        )}
      </List>
    </Box>
  );
};

export default OrderList;
