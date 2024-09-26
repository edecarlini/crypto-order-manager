import { cryptos } from './referenceCrypto';

export const getCodeByCryptoId = (cryptoId: string) => {
  return cryptos?.find((crypto) => crypto.id === cryptoId)?.code;
};
