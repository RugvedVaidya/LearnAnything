import { useState } from "react";

import { sendQuestion } from "../services/mentor.service";

export default function useMentor(lessonId) {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);

    const ask = async (question) => {

        const userMessage = {
            role: "user",
            text: question,
        };

        setMessages((prev) => [
            ...prev,
            userMessage,
        ]);

        try {

            setLoading(true);

            const response = await sendQuestion(
                lessonId,
                question
            );

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    text: response.data.answer,
                },
            ]);

        } finally {

            setLoading(false);

        }

    };

    return {

        messages,

        loading,

        ask,

    };

}