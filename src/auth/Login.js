import React, { useState, useContext } from 'react';
import AuthContext from './AuthContext';
import { usuarioService } from '../../services/usuarioService';

const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [clave, setClave] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        usuarioService.login({ nombre_usuario: nombreUsuario, clave })
            .then(response => {
                login(response.data);
            })
            .catch(error => console.error('Error en el login:', error));
    };

    return (
        <div>
            <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;