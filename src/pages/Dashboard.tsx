import { useState } from "react"
import { Appbar } from "../components/appbar"
import { PostList } from "../components/postsList"
import { ProfileCard } from "../components/profileCard"
import { UserDetails } from "../components/userDetails"

export const Dashboard = () => {
    const [isUserDetail, setIsUserDetail] = useState(false);
    return <>
    <div className="h-screen w-full"> 
        <Appbar />
        <div className="flex justify-center h-full max-h-10/12 gap-3 mt-6">
                <ProfileCard setIsUserDetail={setIsUserDetail} />
            <PostList />
        </div>
    </div>
    <UserDetails isUserDetail={isUserDetail} setIsUserDetail={setIsUserDetail}/>
    </>
}