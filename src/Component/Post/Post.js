import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, body, title } = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }


    return (
        <div className='post'>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>view details 0</Link>
            <Link to={`/post/${id}`}><button className='btn'>View Details</button></Link>
            <button className='btn' onClick={handleNavigate}> view details 2</button>
        </div>
    );
};

export default Post;