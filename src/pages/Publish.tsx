import { useEffect, useState } from "react";
import { Appbar } from "../components/appbar"
import { Editor } from "../components/editor"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from "../components/toast";

interface PublishOptions {
    type: "new" | "update"
}
export const Publish = ({ type }: PublishOptions) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const postId = useParams().id;
    const henddleLoadUpdate = async () => {
        if (type == 'new') return;
        try{
            const response = await axios.get(`${BACKEND_URL}/api/v1/post/${postId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            setTitle(response.data.title);
            setContent(response.data.content);
        }
        catch (error) {
            console.log(error);
        }
    }

    const hendleSave = async () => {
        try {
            setLoading(true);
            if (!title || !content) {
                setLoading(false);
                setVisible(true);
                return;
            }
            let response;
            if (type === 'update'){
                await axios.put(`${BACKEND_URL}/api/v1/post`, {id:postId, title, content }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`
                    }
                })
                setLoading(false);
                navigate(`/post/${postId}`);
            }
            else {
                response = await axios.post(`${BACKEND_URL}/api/v1/post`, { title, content }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`
                    }
                })
                setLoading(false);
                navigate(`/post/${response.data.id}`);
            }
        } catch (error) {
            setLoading(false);
            setVisible(true);
            console.log(error);
        }
    };
    const hendlePublish = async () => {
        try {
            setLoading(true);
            if (!title || !content) {
                setLoading(false);
                setVisible(true);
                return;
            }
            let response;
            if (type === 'update'){
                await axios.put(`${BACKEND_URL}/api/v1/post`, {id:postId, title, content, published:true }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`
                    }
                })
                setLoading(false);
                navigate(`/post/${postId}`);
            }
            else {
                response = await axios.post(`${BACKEND_URL}/api/v1/post`, { title, content, published: true }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`
                    }
                })
                setLoading(false);
                navigate(`/post/${response.data.id}`);
            }
        } catch (error) {
            setLoading(false);
            setVisible(true);
            console.log(error);
        }
    };

    useEffect(() => {
        henddleLoadUpdate();
    }, []);

    return <div className="">
        <Appbar type="publish" actionbtn={hendleSave} onSave={hendleSave} onPublish={hendlePublish} loading={loading} />
        <div className="p-4 flex justify-center h-full">
            <Editor setTitle={setTitle} setContent={setContent} title={title} content={content} />
        </div>
        {visible ? <Toast message="Express yourself - Title and Content are required" visible={visible} setVisible={setVisible} /> : ""}
    </div>
}