import { useEffect } from "react"
import { Auth } from "../components/auth"
import { Quote } from "../components/quote"
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("jwt")){
            navigate("/posts");
        }
    }, []);
    return (
        <div className="grid lg:grid-cols-2">
            <div>
                <Auth type="signin"/>
            </div>
            <div className="invisible lg:visible">
                <Quote />
            </div>
        </div>
    )
}