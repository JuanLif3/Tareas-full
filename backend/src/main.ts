import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Reemplaza la línea simple por este objeto de configuración:
  app.enableCors({
    origin: 'https://tareas-full-i91absajb-juanlifes-projects.vercel.app', // La URL exacta de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
