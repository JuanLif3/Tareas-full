export class CreateTaskDto {
  title: string; // La tarea debe tener un título de tipo string.
  description?: string; // La descripción es opcional (indicado por el '?') y de tipo string.
}
