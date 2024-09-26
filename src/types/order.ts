export interface Order {
  id: string;
  direction: 'buy' | 'sell';
  crypto: string;
  quantity: number;
  usdEquivalent: number;
  expirationDate: string;
}
