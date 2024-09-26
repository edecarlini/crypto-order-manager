import OrderForm from '@/components/Order/OrderForm';
import OrderList from '@/components/Order/OrderList';
import { useOrderStore } from '@/store/useOrderStore';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import fetchCryptoPrice from '@/api/cryptoAPI';

jest.mock('@/api/cryptoAPI', () => ({
  fetchCryptoPrice: jest.fn().mockResolvedValue(50000),
}));

jest.mock('../utils/env', () => ({
  VITE_API_URL: 'http://localhost',
}));

beforeEach(() => {
  useOrderStore.setState({ orders: [] });
  (fetchCryptoPrice as jest.Mock).mockResolvedValue(50000);
});

test('creates a new order and displays it in the list', async () => {
  render(
    <>
      <OrderForm
        onSubmit={(data) => useOrderStore.getState().addOrder(data)}
        onDiscard={() => {}}
      />
      <OrderList onEdit={() => {}} editingOrder={null} />
    </>
  );

  fireEvent.mouseDown(screen.getByLabelText(/crypto/i));

  const bitcoinOption = await screen.findByText('Bitcoin');
  fireEvent.click(bitcoinOption);

  fireEvent.change(screen.getByLabelText(/quantity/i), {
    target: { value: '2' },
  });

  fireEvent.click(screen.getByText(/create order/i));

  await waitFor(() => {
    expect(useOrderStore.getState().orders.length).toBe(1);
  });

  expect(screen.getByText(/bitcoin/i)).toBeInTheDocument();
});
