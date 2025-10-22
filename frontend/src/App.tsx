import { useState, useEffect } from "react";
import axios from "axios";
import { TaskForm } from "./TaskForm"; // Importamos el nuevo componente.

// 1. Definimos una 'interfaz' en TypeScript para la Tarea.
// Esto le dice a nuestro frontend cómo luce el objeto 'Task'.

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

// La URL base de nuestra API en el backend.
const API_URL = 'http://localhost:3000/tasks';

function App() {
  // 2. Creamos un estado para guardar el array de tareas.
  // Inicialmente, es un array vacío.
  const[tasks, setTasks] = useState<Task[]>([]);

  // 3. useEffect se ejecuta una vez cuando el componente se monta.
  // Es el lugar perfecto para cargar datos iniciales.
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

    fetchTasks(); // Ejecutamos la función.
  }, []); // El array vacío [] asegura que solo se ejecute una vez.

  // Creamos una funcion para manejar la adicion de una nueva tarea
  const handleSubmit = (newTask: Task) => {
    // Añadimo la nueva tarea a la lista existente sin tener que recargar la pagina
    setTasks([...tasks, newTask]);
  }


  return (
    <div className="app-container">
      <TaskForm onTaskAdded={handleSubmit}></TaskForm>
      <hr />
      <h1>Lista de Tareas</h1>
      {/*  Añadimos el componente del formulario y le pasamos la función */}
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;