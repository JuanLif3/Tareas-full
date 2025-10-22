import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]), // Importa las herramientas para la entidad 'Task'
  ],
  controllers: [TasksController], // registra al 'recepcionista'
  providers: [TasksService], // Registra al chef
})
export class TasksModule {}
