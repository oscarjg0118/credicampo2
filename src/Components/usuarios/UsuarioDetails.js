import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usuarioService } from '../../services/usuarioService';

const UsuarioDetails = () => {
  const [usuario, setUsuario] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Obtener los detalles del usuario desde el servicio
    usuarioService.getUsuario(id)
      .then(response => setUsuario(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!usuario) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p>Nombre de Usuario: {usuario.nombre_usuario}</p>
      <p>Tipo de Usuario: {usuario.tipo_usuario}</p>
      <p>ID de Referencia: {usuario.id_referencia}</p>
    </div>
  );
};

export default UsuarioDetails;