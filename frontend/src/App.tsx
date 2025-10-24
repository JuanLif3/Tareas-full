// frontend/src/App.tsx
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

// La interfaz Task puede vivir aquí para ser exportada globalmente.

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

function App() {
  return (
    // OLA
    <div className="app-layout">
      <Sidebar />
      <main className="content-area">
        {/* El componente de la ruta activa se renderizará aquí */}
        <Outlet />
      </main>
    </div>
  );
}


export default App;