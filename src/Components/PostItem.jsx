import React from 'react';

const PostItem = (props) => {
    return (
        <div className='post-item'>
            <div className='content-wrapper'>
                <h1>{props.number}. {props.post.title}</h1>
                <p>{props.post.body}</p>
            </div>
            <button className='delete-btn' onClick={() => props.remove(props.post)}>Delete</button>
        </div>
    );
};

export default PostItem;