import React, { createContext, useState } from 'react';
import axios from 'axios';
import { loginUser, registerUser } from '../services/apiService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (data) => {
        const response = await registerUser(data);
        setUser(response.data.user);
    };

    const login = async (data) => {
        const response = await loginUser(data);
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
