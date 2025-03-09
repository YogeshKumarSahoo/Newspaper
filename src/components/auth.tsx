import { SignupInput } from "@yogeshkumarsahoo/medium-common";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";
import {jwtDecode} from 'jwt-decode';

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [postinput, setPostInput] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    interface jwtDecodeType {
        user:{
            name: string;
            id: string;
            email: string;
            dob: Date;
            tagline: string | null;
        }
    }
    useEffect(() => {
        setError(false);
    }, [postinput]);
    const sendRequest = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postinput)
            const jwt = response.data.token;
            localStorage.setItem("jwt", jwt);
            const data = jwtDecode<jwtDecodeType>(jwt);
            console.log(data);
            
            localStorage.setItem("userName", data.user.name);
            localStorage.setItem("userId", data.user.id);
            localStorage.setItem("userEmail", data.user.email);
            localStorage.setItem("userBio", data.user.tagline || "");
            localStorage.setItem("userDob", new Date(data.user.dob).toLocaleDateString("en-GB") || "");
            setLoading(false);
            navigate("/posts");
        } catch (error) {
            setLoading(false);
            setError(true);
            console.log(error);
        }

    }
    return (
        <div className="flex justify-center items-center h-screen bg-slate-100">
            <div className="max-w-md w-full">
                <div className="text-center">
                    <div className="text-4xl font-bold">{type === "signup" ?"Create an account" : "Welcome back!!"}</div>
                    <div className="text-xl text-slate-500 mt-4">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"} 
                        <Link className="underline ml-2" to={type === "signup" ? "/signin" : "/signup"}>
                            {type === "signup" ? "Sign in" : "Sign up"}
                        </Link></div>
                </div>
                <div className="mt-10">
                    {error ? <div>
                        <div className="bg-gray-200 text-slate-600 p-2 rounded">Hmm... Could you check what you Entered!</div>
                    </div> : ""}
                    { type === "signup" ? (laballedInput({lable: "Name",placeholder: "What we call you?",onChange: (e) => {
                        setPostInput({
                                ...postinput,
                                name: e.target.value
                            })
                        }
                    })): ""}
                    {laballedInput({lable: "Email",placeholder: "m@example.com",onChange: (e) => {
                        setPostInput({
                                ...postinput,
                                email: e.target.value
                            })
                        }
                    })}
                    {laballedInput({lable: "Password",type:"password", placeholder: "password please!!!",onChange: (e) => {
                        setPostInput({
                                ...postinput,
                                password: e.target.value
                            })
                        }
                    })}

                    
                    <button type="button" onClick={sendRequest} className="cursor-pointer mt-3 bg-black text-white text-xl w-full rounded p-2">
                        {loading ?<svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                        </svg>: ""}
                        {loading ? "Loading..." : type === "signup" ? "Sign up" : "Sign in"}
                    </button>

                </div>
            </div>
        </div>
    )
}

interface LablledInputType {
    lable: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function laballedInput({ lable, placeholder, type, onChange }: LablledInputType) {
    return (
        <div>
            <label htmlFor={lable} className="font-bold">{lable}</label>
            <input type={type || "text"} id={lable} onChange={onChange} className="w-full border border-slate-300 p-2 rounded mt-1 mb-2 placeholder:text-slate-500" placeholder={placeholder} />
        </div>
    )
}