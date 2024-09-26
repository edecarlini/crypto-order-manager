import OrderForm from '@/components/Order/OrderForm';
import OrderList from '@/components/Order/OrderList';
import { useOrderStore } from '@/store/useOrderStore';
import { useSnackbarStore } from '@/store/useSnackbarStore';
import { Order } from '@/types/order';
import { Card, Container, Typography } from '@mui/material';
import { useState } from 'react';

const HomePage = () => {
  const { addOrder, updateOrder } = useOrderStore();
  const { showSnackbar } = useSnackbarStore();
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  const handleSubmit = (data: Order) => {
    if (editingOrder) {
      updateOrder(data);
      setEditingOrder(null);
      showSnackbar({
        message: 'Order updated successfully',
        severity: 'success',
        duration: 5000,
        showCloseIcon: true,
      });
    } else {
      addOrder(data);
      showSnackbar({
        message: 'Order added successfully',
        severity: 'success',
        duration: 5000,
        showCloseIcon: true,
      });
    }
  };

  const handleEdit = (order: Order) => {
    setEditingOrder(order);
  };

  const handleDiscard = () => {
    setEditingOrder(null);
    showSnackbar({
      message: 'Order editing discarded',
      severity: 'info',
      duration: 5000,
      showCloseIcon: true,
    });
  };

  return (
    <Container>
      <Card variant='outlined'>
        <Typography variant='h2' sx={{ marginBottom: '24px' }}>
          {editingOrder ? 'Edit an order' : 'Make an order'}
        </Typography>
        <OrderForm
          defaultValues={editingOrder || undefined}
          onSubmit={handleSubmit}
          onDiscard={handleDiscard}
        />
      </Card>
      <Card variant='outlined'>
        <Typography variant='h2' sx={{ marginBottom: '24px' }}>
          Orders
        </Typography>
        <OrderList onEdit={handleEdit} editingOrder={editingOrder} />
      </Card>
    </Container>
  );
};

export default HomePage;
