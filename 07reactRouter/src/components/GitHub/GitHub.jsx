import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub(){
    // const [followers,setFollowers] = useState(null);
    // useEffect(() => {
    // fetch('https://api.github.com/users/Aryan-on-Github')
    // .then((res) => res.json())
    // .then( (data) => {setFollowers(data)})
    // .catch((err) => console.error(err))
    // }, [])


    const data = useLoaderData() // its a hook use loads data from loader present in route in main.jsx 
    // the loader stores the data coming from gitHubInfoLoader function
    //it is optimised /faster way then directly using fetch as it automatically handles caching and fetching

    return(
        <div className="bg-gray-600 text-white text-3xl p-4 text-center">
            Followers: {data.followers}
        </div>
    )
}

//optimised api fetch
export const GitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Aryan-on-Github');
    return response.json();
}