import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsuarioList from './components/usuarios/UsuarioList';
import UsuarioDetails from './components/usuarios/UsuarioDetails';
import UsuarioForm from './components/usuarios/UsuarioForm';

function App() {
    return (
    <Router>
        <div>
        <nav>
          {/* Agrega aquí los enlaces de navegación */}
        </nav>

        <Routes>
            <Route path="/usuarios" element={<UsuarioList />} />
            <Route path="/usuarios/crear" element={<UsuarioForm />} />
            <Route path="/usuarios/:id" element={<UsuarioDetails />} />
            <Route path="/usuarios/:id/editar" element={<UsuarioForm />} />
          {/* Agrega aquí otras rutas si es necesario */}
        </Routes>
        </div>
    </Router>
    );
}

export default App;