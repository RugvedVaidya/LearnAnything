export const safeJsonParse = (text) => {
    try {
        return JSON.parse(text);
    } catch (error) {
        throw new Error("AI returned invalid JSON.");
    }
};