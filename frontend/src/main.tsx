// frontend/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Importamos nuestros nuevos componentes de página
import { TaskList } from './pages/TaskList.tsx';
import { AddTask } from './pages/AddTask.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Definimos una ruta "padre" que es nuestro layout App */}
        <Route path="/" element={<App />}>
          {/* Rutas "hijas" que se renderizarán dentro del <Outlet /> */}
          <Route index element={<TaskList />} />
          <Route path="add" element={<AddTask />} />
          {/* <Route path="calendar" element={<CalendarPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);