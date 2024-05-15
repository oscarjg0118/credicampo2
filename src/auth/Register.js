import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usuarioService } from '../../services/usuarioService';

const Register = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [idReferencia, setIdReferencia] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoUsuario = {
            nombre_usuario: nombreUsuario,
            clave,
            tipo_usuario: tipoUsuario,
            id_referencia: idReferencia,
        };

        usuarioService.createUsuario(nuevoUsuario)
            .then(() => navigate('/login'))
            .catch(error => console.error('Error en el registro:', error));
    };

    return (
        <div>
            <h2>Register</h2>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;