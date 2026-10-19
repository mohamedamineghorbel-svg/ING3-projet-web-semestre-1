import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';
//commentaire de test1
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
