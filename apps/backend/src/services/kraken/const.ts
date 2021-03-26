// Public/Private method names
import { Configuration } from '@kraken-nest/api-interfaces';

export const endPoints = {
  public: ['Time', 'Assets', 'AssetPairs', 'Ticker', 'Depth', 'Trades', 'Spread', 'OHLC'],
  private: ['Balance', 'TradeBalance', 'OpenOrders', 'ClosedOrders', 'QueryOrders', 'TradesHistory', 'QueryTrades', 'OpenPositions', 'Ledgers', 'QueryLedgers', 'TradeVolume', 'AddOrder', 'CancelOrder', 'DepositMethods', 'DepositAddresses', 'DepositStatus', 'WithdrawInfo', 'Withdraw', 'WithdrawStatus', 'WithdrawCancel', 'GetWebSocketsToken'],
};

// Default options
export const defaults: Configuration = {
  url: 'https://api.kraken.com',
  version: 0,
  timeout: 30000,
  key: '',
  secret: '',
  otp: 0,
};

export const ConfigurationErrorMessage = '{key: someValue, secret: someValue} are required config fields';
export  const InvalidEndpointErrorMessage = 'Invalid Endpoint:';
export const InvalidKeyErrorMessage = 'API:Invalid key';


