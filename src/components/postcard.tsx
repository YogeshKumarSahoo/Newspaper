interface PostCardProps {
    title: string;
    content: string;
    author: string;
    date: string;
}

export const PostCard = ({ title, content, author, date}: PostCardProps) => {
    return (
        <div className="border-b border-gray-700 pb-4 w-[70em]">
            <div className="flex justify-start gap-2">
                <Avatar name={author} size="small" /> <span className="text-xl font-semibold">{author ?? "Anonymous"}</span> <span className="text-xl">⋅</span> <span className="text-lg">{date}</span>
            </div>
            <div className="mt-2">
                <div className="text-3xl font-bold">
                    {title}
                </div>
                <div className="text-xl mt-2">
                    {content.slice(0, 100)+"..."}
                </div>
            </div>
            <div className="mt-8 text-base font-thin text-gray-500">
                {Math.ceil(content.length/100)} minute(s) read
            </div>
        </div>
    )
}

interface AvatarProps {
    name: string | undefined;
    size: "small" | "big";
}

export const Avatar = ({ name, size }: AvatarProps) => {
    if(!name) {
        name = "A";
    }
    const initials = name.split(' ').map(word => word[0]).join('');
    return(
        <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-7 h-7" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`font-medium ${size === "small" ? "text-xs" : "text-base"} text-white dark:text-gray-300`}>{initials}</span>
        </div>
    )
}