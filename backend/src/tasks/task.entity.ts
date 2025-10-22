import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tasks' }) // Este decorador marca la clase como una tabla en la DB. Le damos el nombre 'tasks'.
export class Task {
  @PrimaryGeneratedColumn('uuid') // Define 'id' como la columna primaria y auto-generada con formato UUID.
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false }) // Define 'title' como una columna de texto, no nula
  title: string;

  @Column({ type: 'text', nullable: true }) // Define 'description' como una columna de texto más largo, que puede ser nula.
  description: string;

  @Column({ type: 'boolean', default: false }) // Define 'completed' como una columna booleana, con valor por defecto 'false'.
  completed: boolean;
}
