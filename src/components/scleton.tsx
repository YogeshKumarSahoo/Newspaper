export const Sceleton = () => {
    return <div role="status" className=" mt-2 w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse ">
        <div className="flex items-center justify-between">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full "></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full  "></div>
        </div>
        <div className="flex items-center justify-between pt-4">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full  "></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full "></div>
        </div>
        <div className="flex items-center justify-between pt-4">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full  "></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full "></div>
        </div>
        <div className="flex items-center justify-between pt-4">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full  "></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full  "></div>
        </div>
        <div className="flex items-center justify-between pt-4">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full  "></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full "></div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
}