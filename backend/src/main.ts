import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://tareas-full-i91absajb-juanlifes-projects.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // La corrección clave: Usar el puerto de Render o 3000 en local
  const port = process.env.PORT || 3000;

  await app.listen(port);
  console.log(`Application is running on port: ${port}`);
}
bootstrap();