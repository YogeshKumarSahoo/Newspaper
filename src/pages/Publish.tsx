import { useState } from "react";
import { Appbar } from "../components/appbar"
import { Editor } from "../components/editor"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = ()=> {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const hendlePublish = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`${BACKEND_URL}/api/v1/post`, {title, content}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            })
            setLoading(false);
            navigate(`/post/${response.data.id}`);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return <div className="">
        <Appbar type="publish" actionbtn={hendlePublish} loading={loading}/>
        <div className="p-4 flex justify-center h-full">
            <Editor setTitle={setTitle} setContent={setContent}/>
        </div>
    </div>
}