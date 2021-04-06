import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { KrakenApiResponse } from '@kraken-nest/api-interfaces';
import { KrakenService } from '../services/kraken/kraken.service';
import { PublicEndPoints, PrivteEndPoints } from '../services/kraken/const';
import Spy = jasmine.Spy;

class MockKrakenService {
  public key: string;
  public secret: string;

  public request(input: string): Promise<KrakenApiResponse> {
    const promise = new Promise<KrakenApiResponse>((resolve, reject) => {
    });
    return promise;
  }

}

describe('AppController', () => {
  let module: TestingModule;
  let krakenService: KrakenService;
  let krakenSpy: Spy;
  let controller: AppController;

  beforeAll(async () => {

    const KrakenServiceProvider = {
      provide: KrakenService,
      useClass: MockKrakenService,
    };

    module = await Test.createTestingModule({
      providers: [KrakenServiceProvider],
      controllers: [AppController],
    }).compile();

    controller = module.get(AppController);
    krakenService = module.get<KrakenService>(KrakenService);
    krakenSpy = spyOn(krakenService, 'request').and.callThrough();
  });

  it('should create', () => {
    expect(controller).toBeTruthy();
  });

  it('tradeHistory should call correct path', () => {
    controller.getTradeHistory()
    expect(krakenSpy).toHaveBeenCalledWith(PrivteEndPoints.tradesHistory);
  });

});
