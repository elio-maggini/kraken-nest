/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import * as inquirer from 'inquirer';
import { ConfigQuestion } from '@kraken-nest/api-interfaces';

const questions: ConfigQuestion[] = [
  {
    type: 'password',
    name: 'key',
    message: "Enter key"
  },
  {
    type: 'password',
    name: 'secret',
    message: "Enter secret"
  }
]

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

// add code to get input for tokens and then bootstrap if we have values
inquirer.prompt(questions).then(answers => {
  process.env.KEY = answers['key'];
  process.env.SECRET = answers['secret'];
  bootstrap();
});
