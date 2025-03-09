import { Dispatch, SetStateAction, useEffect } from "react";

interface ToastType{
    message: string;
    setVisible: Dispatch<SetStateAction<boolean>>;
    visible: boolean;
}

export const Toast = ({ message, visible, setVisible }: ToastType) => {
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);
    
            return () => clearTimeout(timer);
        }, []); 
    return <div id="toast-bottom-right" className={`${visible? "": "hidden"} shake border-2 fixed flex items-center w-full max-w-xs p-4 space-x-4 font-bold text-slate-700 bg-slate-100 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-xl right-5 bottom-5`} role="alert">
        <div className="text-base font-normal">{message ?? "Error!@#!$@"}</div>
    </div>
}