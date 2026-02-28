import { useEffect, useRef, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const navigate = useNavigate();

    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signup(){
        setLoading(true)
        const username = usernameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        try{

            await axios.post(`${BACKEND_URL}/user/signup`, {
                username,
                email,
                password
            });
            setLoading(false);
            navigate("/signin");
            alert("You have signed Up");
        } catch(error){
            if(axios.isAxiosError(error)){
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert("Network error");
                }
            } else {
                alert("Something went wrong");
            }
        }
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
                        Create Account
                    </h3>
                </div>
                <hr className="w-60 mt-4" />
                <div className="flex justify-center flex-col gap-2 m-5">
                    <Input reference={usernameRef} placeholder="Username" type="text" styles="mt-3 border rounded w-60 px-2 py-1.5 outline-none" require={true}/>
                    <Input reference={emailRef} placeholder="Email" type="email" styles="mt-3 border rounded w-60 px-2 py-1.5 outline-none" require={true}/>
                    <Input reference={passwordRef} placeholder="Username" type="text" styles="mt-3 border rounded w-60 px-2 py-1.5 outline-none" require={true}/>
                </div>
                <div className="mt-7 m-5">
                    <Button text={"Submit"} variant="primary" size="md" loading={loading} onClick={signup} disable={loading}/>
                </div>
            </div>
        </div>
    );
};