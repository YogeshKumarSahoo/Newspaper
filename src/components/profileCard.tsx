import { Dispatch, SetStateAction } from "react"
import { Avatar } from "./postcard"

export const ProfileCard = ({ setIsUserDetail }:{setIsUserDetail: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div className="shadow-xl border border-gray-700 rounded-xl divide-y divide-gray-600 p-4 max-w-sm max-h-[35em]">
            <div className="p-6">
                <div className="flex justify-center items-center m-4">
                    <Avatar name={localStorage.getItem("userName") ??"Anonymous"} size="lg"/>
                </div>
                <div className="text-center mt-4">
                    <div className="text-xl font-bold">{localStorage.getItem("userName") ?? "Anonymous"}</div>
                    <div className="text-md text-gray-500">{localStorage.getItem("userBio") ?? `Master of mirth, purveyor of puns, and the
                        funniest person in the kingdom.`}</div>
                </div>
            </div>
            <div className="flex justify-evenly mt-4 py-4 text-center">
                <div>
                    <div className="font-bold text-2xl">234</div>
                    <div className="italic text-lg">Folowers</div>
                </div>
                <div>
                    <div className="font-bold text-2xl">24</div>
                    <div className="italic text-lg">Folowings</div>
                </div>
            </div>
            <div className="mt-4 ">
                <div className="flex justify-center items-center w-full h-full"> 
                    <button 
                        type="button" 
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        onClick={() => setIsUserDetail(true)}
                        >
                        Modify details
                    </button>
                </div>
            </div>
        </div>
    )
}