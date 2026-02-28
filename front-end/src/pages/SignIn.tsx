import { useEffect, useRef, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setShow(true);
    }, []);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signin(){
        setLoading(!loading);
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/user/signin`, {
            email,
            password
        });
        setLoading(!loading);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <div
                className={`text-black min-w-[20vw] min-h-[50vh] border rounded-2xl bg-white shadow-2xl flex items-center flex-col
                transform transition-all duration-500 ease-out
                ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
                <div className="mt-3">
                    <h3 className="font-semibold px-8 py-2  text-black font-[Inter] ">
                        Sing In
                    </h3>
                </div>
                <hr className="w-60 mt-7" />
                <div className="flex justify-center flex-col gap-2 m-5">
                    <Input reference={emailRef} placeholder="Email" type="email" styles="mt-3 border rounded w-60 px-2 py-1.5 outline-none" require={true}/>
                    <Input reference={passwordRef} placeholder="Username" type="text" styles="mt-3 border rounded w-60 px-2 py-1.5 outline-none" require={true}/>
                </div>
                <div className="mt-8 m-5">
                    <Button text={"Submit"} variant="primary" size="md" onClick={signin} loading={loading} disable={loading}/>
                </div>
            </div>
        </div>
    );
};