import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const { name, phone, website, email } = friend
    return (
        <div>
            <h1>Friend name: {name}</h1>
            <h3>Everything you need to about friend</h3>
            <p> Phone : {phone}</p>
            <p>Email: {email} </p>
            <p><Link>{website}</Link></p>
        </div>
    );
};

export default FriendDetails;