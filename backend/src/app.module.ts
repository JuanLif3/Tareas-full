// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    // 1. Carga las variables de entorno del archivo .env de forma global.
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // 2. Configura la conexión a la base de datos de forma asíncrona.
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importa el módulo de configuración.
      inject: [ConfigService], // Inyecta el servicio para poder leer las variables.
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        // TypeORM puede tomar la URL directamente, simplificando todo.
        url: configService.get<string>('DATABASE_URL'),
        entities: [Task], // Le dice a TypeORM qué entidades (tablas) debe reconocer.
        synchronize: true, // ¡IMPORTANTE! Crea/actualiza las tablas en la DB automáticamente. Solo para desarrollo.
        ssl: {
          // Supabase a menudo requiere SSL.
          rejectUnauthorized: false,
        },
      }),
    }),

    TasksModule, // Mantiene nuestro módulo de tareas importado.
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
