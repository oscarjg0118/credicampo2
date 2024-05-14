import axios from 'axios';

// Definir la URL base del backend o API
const baseUrl = 'http://localhost:3000/api/usuarios';

// Función para obtener la lista de usuarios
export const getUsuarios = async () => {
    try {
    const response = await axios.get(baseUrl);
    return response.data;
    } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
    }
};

// Función para obtener los detalles de un usuario específico
export const getUsuario = async (id) => {
    try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
    } catch (error) {
    console.error('Error al obtener usuario:', error);
    throw error;
    }
};

// Función para crear un nuevo usuario
export const createUsuario = async (nuevoUsuario) => {
    try {
    const response = await axios.post(baseUrl, nuevoUsuario);
    return response.data;
    } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
    }
};

// Función para actualizar un usuario existente
export const updateUsuario = async (id, usuarioActualizado) => {
    try {
    const response = await axios.put(`${baseUrl}/${id}`, usuarioActualizado);
    return response.data;
    } catch (error) {
    console.error('Error al actualizar usuario:', error);
    throw error;
    }
};

// Función para eliminar un usuario
export const deleteUsuario = async (id) => {
    try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
    } catch (error) {
    console.error('Error al eliminar usuario:', error);
    throw error;
    }
};