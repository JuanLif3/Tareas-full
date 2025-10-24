import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://tareas-full-i91absajb-juanlifes-projects.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Lee el puerto de las variables de entorno, o usa 3000 si no existe
  const port = process.env.PORT || 3000;

  // Usa la variable 'port' en lugar del número 3000 fijo
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
