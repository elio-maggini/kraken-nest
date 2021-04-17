// Public/Private method names
import { Configuration } from '@kraken-nest/api-interfaces';

export const endPoints = {
  public: ['Time', 'Assets', 'AssetPairs', 'Ticker', 'Depth', 'Trades', 'Spread', 'OHLC'],
  private: ['Balance', 'TradeBalance', 'OpenOrders', 'ClosedOrders', 'QueryOrders', 'TradesHistory', 'QueryTrades', 'OpenPositions', 'Ledgers', 'QueryLedgers', 'TradeVolume', 'AddOrder', 'CancelOrder', 'DepositMethods', 'DepositAddresses', 'DepositStatus', 'WithdrawInfo', 'Withdraw', 'WithdrawStatus', 'WithdrawCancel', 'GetWebSocketsToken'],
};

export enum PublicEndPoints {
  time='Time',
  assets = 'Assets',
  assetPairs = 'AssetPairs',
  ticker = 'Ticker',
  depth = 'Depth',
  trades = 'Trades',
  spread = 'Spread',
  ohlc = 'OHLC',
}

export enum PrivteEndPoints {
  balance='Balance',
  tradeBalance = 'TradeBalance',
  openOrders = 'OpenOrders',
  queryOrders = 'QueryOrders',
  tradesHistory = 'TradesHistory',
  queryTrades = 'QueryTrades',
  openPositions = 'OpenPositions',
  ledgers = 'Ledgers',
  queryLedgers = 'QueryLedgers',
  tradeVolume = 'TradeVolume',
  addOrder = 'AddOrder',
  cancelOrder = 'CancelOrder',
  depositMethods = 'DepositMethods',
  DepositAddresses = 'DepositAddresses',
  depositStatus = 'DepositStatus',
  withdrawInfo = 'WithdrawInfo',
  withdraw = 'Withdraw',
  withdrawStatus = 'WithdrawStatus',
  withdrawCancel = 'WithdrawCancel',
  getWebSocketsToken  = 'GetWebSocketsToken',
}

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
export const MissingKeysErrorMessage = 'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type undefined';
export  const InvalidEndpointErrorMessage = 'Invalid Endpoint:';
export const InvalidKeyErrorMessage = 'API:Invalid key';


