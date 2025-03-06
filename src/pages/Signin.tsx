import { Auth } from "../components/auth"
import { Quote } from "../components/quote"

export const Signin = () => {
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