import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Task } from '../App';

// La URL base de nuestra API en el backend.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/tasks';

export function TaskList() {
     // 2. Creamos un estado para guardar el array de tareas.
  // Inicialmente, es un array vacío.
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Definimos una funcion asincrona para obtener los datos
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();  // Ejecutamos la función.
  }, []);  // El array vacío [] asegura que solo se ejecute una vez.

 // Nueva función para manejar la eliminación de una tarea.
  const handleDeleteTask = async (id: string) => {
    // Preguntamos al usuario para evitar eliminaciones accidentales
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) 
        return;

    try {
      await axios.delete(`${API_URL}/${id}`); // Llama al endpoint DELETE
      // Actualiza eñ espacio local filtrando la tarea eliminada.
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error eliminando la tarea:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/*  Añadimos el componente del formulario y le pasamos la función */}
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