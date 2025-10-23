import { useNavigate } from 'react-router-dom';
import { TaskForm } from '../TaskForm';
import { Task } from '../App';

export function AddTask() {
  const navigate = useNavigate();

  const handleTaskAdded = (newTask: Task) => {
    console.log('Nueva tarea añadida:', newTask);
    // Navegamos de vuelta a la lista de tareas después de añadir una.
    navigate('/');
  };

  return (
    <div>
      <h1>Añadir Nueva Tarea</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
    </div>
  );
}