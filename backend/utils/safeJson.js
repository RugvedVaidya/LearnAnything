export const safeJsonParse = (text) => {

    try {

        return JSON.parse(text);

    } catch {

        throw new Error(
            "AI returned invalid JSON."
        );

    }

};