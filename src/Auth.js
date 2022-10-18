import React, { useState } from "react";
import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvide = ({ children }) => {
    const [data, setData] = useState([]);
    const add = (stepData) => {
        setData((state) => ({
            ...state,
            [stepData.step]: stepData.data
        }));
    }

    return (
        <AuthContext.Provider value={{ add, data }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}