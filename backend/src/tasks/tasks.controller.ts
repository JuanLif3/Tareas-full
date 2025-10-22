import { Controller, Post, Body, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks') // Este decorador define el prefijo de la URL para este controlador. Ej: http://localhost:3000/tasks
export class TasksController {
  // Aquí ocurre de nuevo la Inyección de Dependencias.
  // El Controlador (Recepcionista) pide la herramienta 'TasksService' (el Chef).
  constructor(private readonly tasksService: TasksService) {}

  @Post() // Este decorador mapea las peticiones HTTP POST a este método.
  // La URL final será POST http://localhost:3000/tasks
  create(@Body() CreateTaskDto: CreateTaskDto) {
    // El decorador @Body() extrae el JSON del cuerpo de la petición y lo convierte en nuestro DTO.
    // El controlador no hace ningún trabajo, solo delega la orden al servicio.
    return this.tasksService.create(CreateTaskDto);
  }

  @Get()
  // Este decorador mapea las peticiones HTTP GET a este método.
  // La URL final será GET http://localhost:3000/tasks
  findAll() {
    return this.tasksService.findAll();
  }
}
