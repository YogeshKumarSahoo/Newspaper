import { Avatar } from "./postcard";

interface FullPostProps {
    title: string;
    content: string;
    author: string;
    date: string;
}
export const Fullpost = ({ title, content, author, date }: FullPostProps) => {
    return <div className="grid grid-cols-12 w-6/8">
        <div className=" col-span-8">
            <div className="text-5xl font-bold">
                {title}
            </div>
            <div className="text-sm my-4 text-gray-700">
                Posted on {date}
            </div>
            <div className="text-lg text-gray-950">
                {content}
            </div>
        </div>
        <div className="col-span-4 p-4">
            <div className="text-lg text-gray-900 font-semibold">
                Author
            </div>
            <div className="flex items-center my-4">
                <div>
                    <Avatar name={author ?? "Anonymous"} size="small" />
                </div>
                <div className="ml-4">
                    <div className="text-2xl text-black font-bold my-1">{author ?? "Anonymous"}</div>
                    <div className="text-gray-500">
                        Master of mirth, purveyor of puns, and the
                        funniest person in the kingdom.
                    </div>
                </div>
            </div>
        </div>
    </div>
}