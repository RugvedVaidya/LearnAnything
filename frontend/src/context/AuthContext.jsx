import { createContext, useContext, useEffect, useState } from "react";
import { me } from "../services/auth.service";
import { getToken, removeToken } from "../utils/token";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initialize();
    }, []);

    const logout = () => {
        removeToken();
        setUser(null);
    };

    const initialize = async () => {

        try {

            const token = getToken();
            
            console.log("Token : ", token);

            if (!token) {
                console.log("no token found");
                setLoading(false);
                return;
            }

            const response = await me();
            console.log("ME RESPONSE:", response);
            console.log("USER:", response.data);

            setUser(response.data);

        } catch (error) {
            console.log("ME ERROR:", error);
            console.log("USER:", error.response);

            removeToken();
            setUser(null);

        } finally {

            setLoading(false);

        }

    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);