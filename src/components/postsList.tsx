import { Link } from 'react-router-dom';
import EditIco from './../../public/edit-ico.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { Sceleton } from './scleton';
export const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const gegtUsersPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${BACKEND_URL}/api/v1/post/bulk?authorId=${localStorage.getItem("userId")}&pub=false`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            })
            setLoading(false)
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        gegtUsersPosts();
    }, []);
    return <div className="w-full max-w-4xl border rounded-lg p-4">
        <div>
            <div className="flex w-full h-full justify-between items-center pr-4">
                <div className="text-2xl">All posts</div>
                <div>
                    <input className="text-lg" type="text" placeholder="Search" />
                </div>
            </div>
            <div className="p-2 flex flex-col gap-4 mt-4 border-y-1">
                    <div className="flex justify-between items-center">
                    <div className="w-full max-w-[25em]">Title</div>
                        <div>Last update</div>
                        <div>Published</div>
                        <div>.   .   .</div>
                    </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {loading ? <div className=" flex justify-center items-center">
                    <div className="flex flex-col w-8/8">
                        <Sceleton />
                        <Sceleton />
                    </div>
                </div>:
                    posts.map((post: SingleCardType) => {
                        return <Link to={`/post/${post.id}`}><SingleCard key={post.id} id={post.id} title={post.title} updatedAt={post.updatedAt} published={post.published} /></Link>
                    })
                }
                </div>
        </div> 
    </div>
}

interface SingleCardType{
    id: string;
    title: string;
    updatedAt: string;
    published: boolean;
}

const SingleCard = ({ id, title, updatedAt, published }: SingleCardType) => {
    const date = new Date(updatedAt);
    const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });

    return <div id={id} className="p-2 cursor-pointer flex justify-between items-center text-xl h-20 hover:bg-gray-100">
        <div className="w-full max-w-[20em] ">{title}</div>
        <div className='text-sm'>{formattedDate}</div>
        <div className='text-sm'>{published? "Yes": "No"}</div>
        <div className=''>
            <Link to={"/publish/"+id}>
                <img src={EditIco} alt='EditIcon' width={"20px"} />
            </Link>
        </div>
    </div>
}