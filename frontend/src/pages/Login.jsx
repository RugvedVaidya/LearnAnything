import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { saveToken } from "../utils/token";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await login({
                email,
                password,
            });

            console.log("Login response: ", response);
            console.log("Token:", response.data.token);
            saveToken(response.data.token);

            navigate("/");

        } catch (error) {

            console.log("Login error: ", error);
            alert(error.response?.data?.message || "Login failed.");

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 flex items-center justify-center">

            <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-8">

                <h1 className="text-3xl font-bold text-white text-center">

                    LearnAnything AI

                </h1>

                <p className="text-slate-400 text-center mt-2">

                    Welcome back

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition py-3 text-white font-semibold"
                    >

                        Login

                    </button>

                </form>

            </div>

        </div>

    );

}