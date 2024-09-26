import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { useOrderStore } from '../store/useOrderStore';
import OrderForm from '../components/Order/OrderForm';

beforeEach(() => {
  useOrderStore.setState({ orders: [] });
});

test('creates a new order and displays it in the list', async () => {
  render(
    <OrderForm
      onSubmit={(data) => useOrderStore.getState().addOrder(data)}
      onDiscard={() => {}}
    />
  );

  fireEvent.change(screen.getByLabelText(/crypto/i), {
    target: { value: 'bitcoin' },
  });
  fireEvent.change(screen.getByLabelText(/quantity/i), {
    target: { value: '2' },
  });

  fireEvent.click(screen.getByText(/create order/i));

  expect(useOrderStore.getState().orders.length).toBe(1);

  expect(screen.getByText(/bitcoin/i)).toBeInTheDocument();
});
