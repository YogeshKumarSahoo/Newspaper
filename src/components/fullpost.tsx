import { Avatar } from "./postcard";

interface FullPostProps {
    title: string;
    content: string;
    author: string;
    tagline: string;
    date: string;
}
export const Fullpost = ({ title, content, author, date, tagline }: FullPostProps) => {
    const fdate = new Date(date);
    const formattedDate = fdate.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });

    return <div className="grid grid-cols-12 w-6/8">
        <div className=" col-span-8">
            <div className="text-5xl font-bold">
                {title}
            </div>
            <div className="text-sm my-4 text-gray-700">
                Posted on {formattedDate}
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
                    <Avatar name={author ?? "Anonymous"} size="md" />
                </div>
                <div className="ml-4">
                    <div className="text-2xl text-black font-bold my-1">{author ?? "Anonymous"}</div>
                    <div className="text-gray-500">
                        {tagline ?? `Master of mirth, purveyor of puns, and the
                        funniest person in the kingdom.`}
                    </div>
                </div>
            </div>
        </div>
    </div>
}