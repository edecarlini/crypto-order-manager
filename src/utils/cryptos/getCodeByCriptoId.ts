import { cryptos } from './referenceCrypto';

export const getCodeByCriptoId = (cryptoId: string) => {
  return cryptos?.find((crypto) => crypto.id === cryptoId)?.code;
};
