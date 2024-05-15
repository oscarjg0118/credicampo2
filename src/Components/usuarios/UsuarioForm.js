import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usuarioService } from '../../services/usuarioService';

const UsuarioForm = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [idReferencia, setIdReferencia] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoUsuario = {
        nombre_usuario: nombreUsuario,
        clave,
        tipo_usuario: tipoUsuario,
        id_referencia: idReferencia,
    };

    if (id) {
      // Actualizar usuario existente
        usuarioService.updateUsuario(id, nuevoUsuario)
        .then(() => navigate('/usuarios'))
        .catch(error => console.error(error));
    } else {
      // Crear nuevo usuario
        usuarioService.createUsuario(nuevoUsuario)
        .then(() => navigate('/usuarios'))
        .catch(error => console.error(error));
    }
    };

    return (
    <div>
        <h2>{id ? 'Editar Usuario' : 'Crear Usuario'}</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
            <input
            type="text"
            id="nombreUsuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="clave">Clave:</label>
            <input
            type="password"
            id="clave"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="tipoUsuario">Tipo de Usuario:</label>
            <input
            type="text"
            id="tipoUsuario"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="idReferencia">ID de Referencia:</label>
            <input
            type="text"
            id="idReferencia"
            value={idReferencia}
            onChange={(e) => setIdReferencia(e.target.value)}
            />
        </div>
        <button type="submit">{id ? 'Actualizar Usuario' : 'Crear Usuario'}</button>
        </form>
    </div>
    );
};

export default UsuarioForm;