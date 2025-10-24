import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Se obtiene la URL del frontend desde una variable de entorno.
  // Esto permite configurar el origen permitido sin modificar el código.
  const corsOrigin = process.env.CORS_ORIGIN;

  app.enableCors({
    origin: corsOrigin, // Usamos la variable para configurar dinámicamente el origen.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // La corrección clave: Usar el puerto de Render o 3000 en local
  const port = process.env.PORT || 3000;

  await app.listen(port);
  console.log(`Application is running on port: ${port}`); // Feedback claro del puerto en ejecución.
}
bootstrap();