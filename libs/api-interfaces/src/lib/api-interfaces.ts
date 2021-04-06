export interface Configuration {
  key: string;
  secret: string;
  url: string;
  version: number;
  timeout: number;
  otp: number;
}

export interface ConfigQuestion {
  type: string;
  name: string;
  message: string;
}

export interface KrakenApiResponse {
  error: [];
  result: {
    [key: string]: unknown
  }
}

export interface KrakenAccountBalance {
  error: [];
  result: {
    [key: string]: number
  }
}

export interface KrakenTradeHistory {
  error: [];
  result: {
    count: number;
    trades: []
  }
}

export interface KrakenTicker {
  error: [];
  result: {
      a: string [],
      b: string [],
      c: string []
      v: string [],
      p: string [],
      t: string [],
      l: string [],
      h: string [],
      o: string
  }
}


/**
 * These are the token pairs I need at the moment.
 * Feel free to add your own by pointing a web browser to something like
 * https://api.kraken.com/0/public/Ticker?pair=ETHUSD
 * which yields XETHZUSD as the result you need to map XETH from
 * your account balance results. If you see a ".S" in your results
 * these are stacked balances.
 */
export abstract class TradingPair {
  public static map = {
    'DOT.S': 'DOTUSD',
    'DOT': 'DOTUSD',
    'XXBT': 'XXBTZUSD',
    'XETH': 'XETHZUSD',
    'XXRP': 'XXRPZUSD',
    'XTZ': 'XTZUSD'
  };
}
