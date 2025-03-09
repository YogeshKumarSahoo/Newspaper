import { Appbar } from "../components/appbar"
import { PostCard } from "../components/postcard"
import { Sceleton } from "../components/scleton"
import { PostType, usePosts } from "../hooks"
import { Link } from "react-router-dom"

export const Posts = () => {
    const {loading, posts} = usePosts();
    if (loading) {
        return <div className="w-screen h-screen">
            <Appbar />
            <div className=" flex justify-center items-center">
                <div className="flex flex-col w-5/8">
                    <Sceleton />
                    <Sceleton />
                    <Sceleton />
                </div>
            </div>
        </div>
    }
    return (
        <div>
            <Appbar />
            <div className="flex flex-col items-center">
                {posts.map((post: PostType) => (
                    <Link to={"/post/" + post.id}>
                        <div id={post.id} className=" m-4 ">
                            <PostCard
                                author={post.author.name}
                                title={post.title}
                                content={post.content}
                                date={post.publishedAt}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}