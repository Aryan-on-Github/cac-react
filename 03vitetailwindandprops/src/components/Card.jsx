import React from "react";

function Card({username = "No name" , title = "No Title" , description = "No description"}){ //two syntaxes either you use prop.username , prop.title ,etx or {username,tile,description}
    // you also put a default in there in case its not defined in main App.jsx
return(
<div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://imgs.search.brave.com/8j_woIrj2152f3p6mu9A4EAmdJMJd6mw8CiIKxOv7UY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzll/ZHN2ZC5qcGc"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
)
}

export default Card;