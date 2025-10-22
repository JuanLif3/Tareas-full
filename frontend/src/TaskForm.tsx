import {  useState } from "react";
import axios from "axios";
import { Task } from './App' // Importamos la interfaz Task desde App.tsx
 
// La URL de nuestra API para crear tareas.
const API_URL = 'http://localhost:3000/tasks';

// Definimos las props que recibirá el componente
interface TaskFormProps {
    onTaskAdded: (task: Task) => void;
}

export function TaskForm({ onTaskAdded}: TaskFormProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevenimos que la página se recargue.

        if (!title) { // Validación simple para que el título no esté vacío.
            alert('El titulo es obligatorio');
            return;
        }

        try {
            // Hacemos la peticion POST con los datos del formulario
            const response = await axios.post(API_URL, { title, description});

            // Llamamos a la función que nos pasaron por props con la nueva tarea.
            onTaskAdded(response.data);

            // Limpiamos los campos del formulario
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error("Error al crear la tarea", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h3>Añadir una nueva tarea</h3>
            <input 
            type="text" 
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Descripcion"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Guardar tarea</button>
        </form>
    );
}