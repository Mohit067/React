import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

// export const Github = () => {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         fetch("https://api.github.com/users/mohit067")
//         .then(res => res.json())
//         .then((data) => {
//             console.log("Followers:", data.followers);
//             setData(data)
//         });
//     }, [])
//     return(
//         <div
//             className="flex justify-between m-auto text-lg font-medium bg-gray-700 text-white p-4"
//         >   <img
//                 src={data ? data.avatar_url : ""}
//                 alt="GitHub Avatar"
//                 className="w-24 h-24 ml-4 rounded-full border-4 border-white shadow-lg"
//             />
//             GitHub Followers: {data ? data.followers : "Loading..."}
            
//         </div>
//     )
// }


export const Github = () => {
    const data = useLoaderData(); // pulls the data from GithubLoaderInfo
    return(
        <div
            className="flex justify-between m-auto text-lg font-medium bg-gray-700 text-white p-4"
        >   <img
                src={data ? data.avatar_url : ""}
                alt="GitHub Avatar"
                className="w-24 h-24 ml-4 rounded-full border-4 border-white shadow-lg"
            />
            GitHub Followers: {data ? data.followers : "Loading..."}
            
        </div>
    )
}
export const GithubLoaderInfo = async () => {
    const response = await fetch("https://api.github.com/users/mohit067");
    return response.json();
}