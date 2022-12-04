import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData();
    const { body, title, userId } = details
    console.log(details)
    const navigate = useNavigate()
    const handlenavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h1> This post's Details : {title} </h1>
            <p>{body}</p>
            <button onClick={handlenavigate}>Get the author</button>
        </div>
    );
};

export default PostDetails;