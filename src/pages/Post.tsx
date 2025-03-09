import { useParams } from "react-router-dom";
import { PostType, usePost } from "../hooks"
import { Fullpost } from "../components/fullpost";
import { Appbar } from "../components/appbar";
import { Sceleton } from "../components/scleton";


export const Post = () => {
    const { id } = useParams();
    const { loading, post} = usePost({id: id || ""});
    if(loading) {
            return <div className="w-screen h-screen">
                <Appbar />
                <div className=" flex justify-center items-center">
                    <div className="flex flex-col w-6/8">
                        <Sceleton/> 
                        <Sceleton/>
                        <Sceleton/>
                    </div>
                </div>
            </div>
        }
    const { title, content, author, publishedAt, updatedAt }: PostType = post;
    return <div>
        <Appbar/>
        <div className="flex justify-center m-10">
            <Fullpost
                author={author.name}
                title={title}
                content={content}
                date={publishedAt ?? updatedAt}
                tagline={author.tagline}
            />
        </div>
    </div>
}