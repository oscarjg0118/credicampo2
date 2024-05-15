import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUsuario } from '../../services/usuarioService';

const UsuarioDetails = () => {
    const [usuario, setUsuario] = useState(null);
    const { id } = useParams();

    useEffect(() => {
    const fetchUsuario = async () => {
        try {
        const usuarioData = await getUsuario(id);
        setUsuario(usuarioData);
        } catch (error) {
        console.error('Error al obtener usuario:', error);
        }
    };

    fetchUsuario();
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
        <Link to={`/usuarios/${id}/editar`}>Editar Usuario</Link>
    </div>
    );
};

export default UsuarioDetails;