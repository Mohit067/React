import { useParams } from "react-router-dom"

export const User = () => {
    const {userid} = useParams();
    return(
        <div className="flex justify-center text-lg font-medium bg-black text-white m-4 p-4 mask-x-to-150%">
            User: {userid}
        </div>
    )
}