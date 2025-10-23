import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h2>Tasks App</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Ver Lista de Tareas</Link>
        </li>
        <li>
          <Link to="/add">Añadir Tarea</Link>
        </li>
        <li>
          <Link to="/calendar">Calendario (Próximamente)</Link>
        </li>
      </ul>
    </nav>
  );
}