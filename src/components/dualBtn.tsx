import { useState } from "react";

interface SavePublishButtonProps {
    onSave: () => void;
    onPublish: () => void;
    loading?: boolean;
}

export default function SavePublishButton({ onSave, onPublish, loading }: SavePublishButtonProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <div className="relative w-auto">
                <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm py-2 grid grid-cols-6 gap-2 w-full">
                    <button
                        onClick={onSave}
                        className="col-span-4 text-gray-900  w-full"
                        disabled={loading}
                        title="Save your changes"
                    >
                        {loading ? (
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                            </svg>
                        ) : "Save"}
                    </button>
                    <div className=" col-span-2 flex justify-center items-center mr-1">
                        <span
                            onMouseEnter={toggleDropdown}
                            className="w-4 h-4 transition-transform cursor-pointer"
                        >
                            <svg
                                className={`${isOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>

                    </div>
                </div>
                {isOpen && (
                    <div
                        onMouseLeave={handleMouseLeave}
                        className="absolute left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg transition-all duration-200 ease-in-out opacity-100 scale-100 transform origin-top w-auto"
                    >
                        <button
                            className="w-full px-4 py-2 text-left hover:bg-gray-100"
                            onClick={onPublish}
                            disabled={loading}
                            title="Publish your changes"
                            type="button"
                        >
                            {loading ? "Publishing..." : "Publish"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
