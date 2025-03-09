import {  Dispatch, SetStateAction, useEffect, useState } from "react"
import { Avatar } from "./postcard";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { UpdateUserInput } from "@yogeshkumarsahoo/medium-common";

interface userDetailsType{
    setIsUserDetail: Dispatch<SetStateAction<boolean>>,
    isUserDetail: boolean
}

export const UserDetails = ({ isUserDetail, setIsUserDetail }: userDetailsType)=> {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);

    
    const sendRequest = async ()=> {
        try {
            setLoading(true)
            const [day, month, year] = date.split("/"); 
            const dateObject = new Date(Number(year), Number(month) - 1, Number(day)); 
            const payload: UpdateUserInput = {
                name,
                tagline: bio,
                dob: dateObject.toISOString()
            }
            await axios.put(`${BACKEND_URL}/api/v1/user/${localStorage.getItem("userId")}`, payload, {headers:{
                'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }})
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error);
        }
    }

    useEffect(() => {
        setName(localStorage.getItem("userName") || "");
        setBio(localStorage.getItem("useBio") || "");
        setDate(localStorage.getItem("userDob") || "");
    }, [])
    

    return <>
        {isUserDetail ? <div className="absolute top-0 bg-black/30 backdrop-blur-xs p-4 rounded-lg z-20 w-full h-full">
            <div className="flex w-full h-full justify-center items-center">
                <div className="bg-white w-full max-w-xl p-6 rounded-2xl shadow-2xl">
                    <div className="flex justify-end">
                        <div className=" relative h-6 w-5 text-center rounded-md cursor-pointer p-1"
                        onClick={() => setIsUserDetail(false)}
                        >X</div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Avatar name={localStorage.getItem("userName") || ""} size="lg"/>
                        <h2 className="text-2xl font-bold ">{localStorage.getItem("userEmail")}</h2>
                    </div>
                    <div className="">
                        <LaballedInput lable="Name" placeholder="What we call you?" value={name} onChange={setName}/>
                        <LaballedInput lable="Bio" placeholder="Let people know about you." value={bio} onChange={setBio}/>
                        <LaballedInput lable="DOB" placeholder="DD/MM/YYYY" value={date} onChange={setDate}/>
                    </div>
                    <button type="button" onClick={sendRequest} className="cursor-pointer mt-3 bg-black text-white text-xl w-full rounded p-2">
                        {loading ? <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                        </svg> : ""}
                        {loading ? "Loading..." : "All set"}
                    </button>
                </div>

            </div>
        </div>: ""}
    </>
}

interface LablledInputType {
    lable: string;
    placeholder: string;
    type?: string;
    value?: string;
    onChange: Dispatch<SetStateAction<string>>
}

function LaballedInput({ lable, placeholder, type, value, onChange }: LablledInputType) {
    return (
        <div>
            <label htmlFor={lable} className="font-bold">{lable}</label>
            <input type={type || "text"} value={value} id={lable} onChange={(e)=>{ onChange(e.target.value)}} className="w-full border border-slate-300 p-2 rounded mt-1 mb-2 placeholder:text-slate-500" placeholder={placeholder} />
        </div>
    )
}