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

export interface KrakenTradeHistory {
  error: [];
  result: {
    count: number;
    trades: [
    ]
  }
}
