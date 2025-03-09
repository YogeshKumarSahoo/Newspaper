interface PostCardProps {
    title: string;
    content: string;
    author: string;
    date: string;
}

export const PostCard = ({ title, content, author, date}: PostCardProps) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
    

    return (
        <div className="border-b border-gray-700 pb-4 w-[70em]">
            <div className="flex justify-start gap-2">
                <Avatar name={author} size="sm" /> <span className="text-xl font-semibold">{author ?? "Anonymous"}</span> <span className="text-xl">⋅</span> <span className="text-lg">{formattedDate}</span>
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
    size: "sm" | "md" | "lg";
}

export const Avatar = ({ name, size }: AvatarProps) => {
    if(!name) {
        name = "A";
    }    
    const initials = name.split(' ')[0].charAt(0).toUpperCase() + ((name.split(' ').length ) > 1 ?(name.split(' ')[name.split(' ').length-1]?.charAt(0).toUpperCase()): "");
    return(
        <div className={`relative inline-flex items-center justify-center ${size === "sm" ? "w-7 h-7" : size === "md" ? "w-10 h-10" : "w-25 h-25"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`font-medium ${size === "sm" ? "text-xs" : size === "md" ? "text-base": "text-5xl"} text-white`}>{initials}</span>
        </div>
    )
}