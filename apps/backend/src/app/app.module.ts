import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { KrakenService } from '../services/kraken/kraken.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [KrakenService],
})
export class AppModule {}
