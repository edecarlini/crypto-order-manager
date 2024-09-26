import { Order } from '@/types/order';
import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface OrderState {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrder: (updatedOrder: Order) => void;
  deleteOrder: (id: string) => void;
}

type OrderPersist = (
  config: (
    set: (
      partial:
        | Partial<OrderState>
        | ((state: OrderState) => Partial<OrderState>)
    ) => void
  ) => OrderState,
  options: PersistOptions<OrderState>
) => (
  set: (
    partial: Partial<OrderState> | ((state: OrderState) => Partial<OrderState>)
  ) => void
) => OrderState;

export const useOrderStore = create<OrderState>(
  (persist as unknown as OrderPersist)(
    (set) => ({
      orders: [],
      addOrder: (order) =>
        set((state) => ({ orders: [...state.orders, order] })),
      updateOrder: (updatedOrder) =>
        set((state) => ({
          orders: state.orders?.map((order) =>
            order.id === updatedOrder.id ? updatedOrder : order
          ),
        })),
      deleteOrder: (id) =>
        set((state) => ({
          orders: state.orders?.filter((order) => order.id !== id),
        })),
    }),
    {
      name: 'order-storage',
    }
  )
);
