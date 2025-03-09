import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface PostType {
    id: string,
    title: string,
    content: string,
    publishedAt: string,
    updatedAt: string,
    author: {
        name: string,
        tagline: string,
    }
}
export const usePost = ({id}: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({} as PostType);
    
    useEffect(() => {
        axios.get(BACKEND_URL + "/api/v1/post/"+id,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then((response) => {
                setPost(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        post
    }
}
export const usePosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(BACKEND_URL + "/api/v1/post/bulk",{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        posts
    }
}