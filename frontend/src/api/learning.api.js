import api from "./api";

export const getMyLearning = () => {
    return api.get("/my-learning");
};