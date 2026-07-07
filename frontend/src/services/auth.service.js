import {
    loginUser,
    registerUser,
    getCurrentUser,
} from "../api/auth.api";

export const login = async (data) => {
    const res = await loginUser(data);
    return res.data;
};

export const register = async (data) => {
    const res = await registerUser(data);
    return res.data;
};

export const me = async () => {
    const res = await getCurrentUser();
    return res.data;
};