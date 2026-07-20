import { getMyLearning } from "../api/learning.api";

export const fetchMyLearning = async () => {
    const res = await getMyLearning();
    return res.data;
};