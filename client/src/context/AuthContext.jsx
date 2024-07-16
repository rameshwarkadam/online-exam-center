import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (data) => {
        const response = await axios.post('/api/auth/register', data);
        setUser(response.data.user);
    };

    const login = async (data) => {
        const response = await axios.post('/api/auth/login', data);
        setUser(response.data.user);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
