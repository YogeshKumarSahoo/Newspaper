import { Link } from "react-router-dom"
import { Avatar } from "./postcard"
import { useState } from "react";
import SavePublishButton from "./dualBtn";

interface AppbarType {
    loading?: boolean;
    type?: "new" | "publish";
    actionbtn?: () => void;
    onPublish?: () => void;
    onSave?: () => void;
}

export const Appbar = ({ type = "new", actionbtn, loading, onSave, onPublish }: AppbarType) => {
    const [menu, setMenu] = useState(false);
    const userName = localStorage.getItem("userName") || "Anonymous";
    const userEmail = localStorage.getItem("userEmail") || "Anonymous@gmail.com";

    const handdleLogout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("jwt");
    }

    return(
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-slate-50 border-b border-gray-400 shadow-xl"> 
            <Link to="/">
                <div className="text-2xl font-bold">
                    Newspaper
                </div>
            </Link>
            <div className="flex gap-4">
                <Link to={type === "new" ?"/publish":""}>
                    {type === "new" ? <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        onClick={type === "new" ? ()=>{} :()=>actionbtn?.()}
                    >{loading ? <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                        </svg> : ""}
                        New
                    </button>:
                        <SavePublishButton onSave={onSave ?? (() => { })} onPublish={onPublish ?? (() => { })} loading={loading}/>}
                </Link>
                <div onClick={()=>setMenu(true)} className="cursor-pointer" id="user-menu-button" >
                    <Avatar name={userName} size="md"/>
                </div>
                <div className={`${menu ? "": "hidden"} z-50 absolute mt-12 right-2 text-base list-none bg-white divide-y divide-gray-200 rounded-lg shadow-lg`} id="user-dropdown" onFocus={()=>setMenu(true)} onMouseLeave={()=>setMenu(false)}>
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900">{userName}</span>
                        <span className="block text-sm  text-gray-500 truncate">{userEmail}</span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                        </li>
                        <li>
                            <a href="" onClick={handdleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>      
        </div>
    )
}