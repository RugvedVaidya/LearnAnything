import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";

import { login, me } from "../../services/auth.service";
import { saveToken } from "../../utils/token";
import useAuth from "../../hooks/useAuth";

import AuthLayout from "../../layouts/AuthLayout";
import Card from "../../components/ui/Card";
import Logo from "../../components/ui/Logo";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Divider from "../../components/ui/Divider";

export default function Login() {

    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await login({
                email,
                password,
            });

            saveToken(response.data.token);

            // Refresh auth state
            const meResponse = await me();

            setUser(meResponse.data);

            // Give React one render cycle
            setTimeout(() => {
                navigate("/", { replace: true });
            }, 0);

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Login failed."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <AuthLayout>

            <Card className="relative overflow-hidden w-full max-w-[760px] px-16 py-14">

                {/* Background Circle */}

                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#3E3568]/70" />

                <div className="relative z-10">

                    <Logo />

                    <p className="mt-3 text-[#9E97B7] text-lg">

                        Pick up where you left off

                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-12 space-y-8"
                    >

                        <Input
                            label="Email"
                            icon={<FiMail />}
                            type="email"
                            placeholder="tester@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="flex justify-end">

                            <button
                                type="button"
                                className="text-[#8B7CF7] hover:text-white transition"
                            >
                                Forgot password?
                            </button>

                        </div>

                        <Button
                            type="submit"
                            loading={loading}
                            className="w-full h-16 text-xl rounded-3xl"
                        >
                            Log In
                        </Button>

                        <Divider />

                        <Button
                            type="button"
                            variant="secondary"
                            className="w-full h-16 text-xl rounded-3xl"
                        >
                            Continue with Google
                        </Button>

                    </form>

                    <div className="mt-10 text-center">

                        <span className="text-[#9E97B7]">

                            New here?

                        </span>

                        {" "}

                        <Link
                            to="/register"
                            className="font-semibold text-[#F5B942] hover:underline"
                        >

                            Create an account

                        </Link>

                    </div>

                </div>

            </Card>

        </AuthLayout>

    );

}