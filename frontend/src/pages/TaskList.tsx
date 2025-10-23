import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Task } from '../App';

// 1. Definimos SOLO la URL base de la API.
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // 2. Hacemos la llamada a la ruta completa: BASE_URL + /tasks
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleDeleteTask = async (id: string) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      return;
    }
    try {
      // 3. Hacemos la llamada de eliminación a la ruta completa.
      await axios.delete(`${API_BASE_URL}/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error eliminando la tarea:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <div className="task-content">
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
            <button onClick={() => handleDeleteTask(task.id)} className="delete-button">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}