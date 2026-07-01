export const safeJsonParse = (text) => {
    try {
        return JSON.parse(text);
    } catch (error) {
        console.log("===== JSON PARSE FAILED =====");
        console.log(text);
        console.log(error.message);
        console.log("=============================");
        throw new Error("AI returned invalid JSON.");
    }
};