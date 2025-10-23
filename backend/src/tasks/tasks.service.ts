import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable() // Este decorador marca la clase para que NestJS la pueda 'inyectar' en otras partes.
export class TasksService {
  // El constructor es donde ocurre la Inyección de Dependencias.
  // Pedimos a NestJS que nos inyecte el repositorio para nuestra entidad 'Task'.
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>, // Esta es nuestra herramienta para interactuar con la DB.
  ) {}

  // Este método se encargará de la lógica para crear una nueva tarea.
  // Es asíncrono porque las operaciones de base de datos toman tiempo.
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = this.taskRepository.create(createTaskDto); // 1. Crea una instancia de la entidad con los datos del DTO.
    return this.taskRepository.save(newTask); // 2. Guarda esa instancia en la base de datos y la retorna.
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  // Nuevo metodo para eliminar una tarea por su id
  async remove(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id); // Intenta eliminar por ID.

    if (result.affected === 0) {
      throw new NotFoundException(`Tarea con ID "${id}" no encontrada.`);
    }
  }
}
