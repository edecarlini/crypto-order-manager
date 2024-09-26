import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const fetchCryptoPrice = async (cryptoId: string): Promise<number> => {
  const response = await axios.get(`${API_URL}/simple/price`, {
    params: {
      ids: cryptoId,
      vs_currencies: 'usd',
    },
  });
  return response.data[cryptoId].usd;
};

export default fetchCryptoPrice;
