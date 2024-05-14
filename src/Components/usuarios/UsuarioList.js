import React, { useEffect, useState } from 'react';
import { usuarioService } from '../../services/usuarioService';
import { Link } from 'react-router-dom';

const UsuarioList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Obtener la lista de usuarios desde el servicio
    usuarioService.getUsuarios()
      .then(response => setUsuarios(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <Link to="/usuarios/crear">Crear Usuario</Link>
      <table>
        <thead>
          <tr>
            <th>Nombre de Usuario</th>
            <th>Tipo de Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id_usuario}>
              <td>{usuario.nombre_usuario}</td>
              <td>{usuario.tipo_usuario}</td>
              <td>
                <Link to={`/usuarios/${usuario.id_usuario}`}>Ver Detalles</Link>
                <Link to={`/usuarios/${usuario.id_usuario}/editar`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuarioList;